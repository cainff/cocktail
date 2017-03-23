$(function(){
    $('#cocktails').click(function(){
        $.get('/api/cocktail', function(data){
            
            $('#cocktail_list').empty();
            for(var i=0; i<data.length; i++){
                var _li = '<li>' + 'Name : ' + data[i].name + ' ' + ' - ' + 'Ingredient : ' + ' ' + data[i].ingredient +' '+ ' - ' + ' ' + data[i].ingredient2 + ' ' + ' - ' + ' ' + data[i].ingredient3 + ' '+ ' - ' + ' ' + data[i].ingredient4 + ' '+ ' - ' + ' ' + 'Price : ' + data[i].price +'</li>';
                $('#cocktail_list').append(_li);
            }
        })
    })
});


    
    $('#pushingredient').submit(function(e){
        e.preventDefault();
        
        var _name = $('#name').val();
        var _ingredient = $('#ingredient').val();
        var _ingredient2 = $('#ingredient2').val();
        var _ingredient3 = $('#ingredient3').val();
        var _ingredient4 = $('#ingredient4').val();
        
        $.post('api/cocktail', {
            name: _name,
            ingredient: _ingredient,
            ingredient2: _ingredient2,
            ingredient3: _ingredient3,
            ingredient4: _ingredient4
        }).done(function(data){
            alert ("Data Loaded: " + data );
        });
    });
  

    $('#deletecocktail').submit(function(e){
        e.preventDefault();
        
        var ingredient_ = $('#name_remove').val();
        var ingredient2_ = $('#name_remove2').val();
        var ingredient3_ = $('#name_remove3').val();
        var ingredient4_ = $('#name_remove4').val();
        
       $.ajax({
               url: '/api/cocktail',
               type: 'DELETE',
               data: { ingredient : ingredient_ },
               success: function(data) {
                   console.log(data)
                return this;

               }
           });
    });
 

    
            
            /*$('#result_list').empty();
            for(var i=0; i<data.length; i++){
                var _li = '<li>'+ data[i].candidat +'</li>';
                $('#result_list').append(_li); 
                 } */
       





  