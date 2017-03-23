module.exports = function(app, data) {
    var mysql = app.drivers.mysql;
    
    this.table = 'bar';
    
    this.id=data.id || null;
    this.name= data.name || null;
    this.ingredient = data.ingredient || null;
    this.ingredient2 = data.ingredient2 || null;
    this.ingredient3 = data.ingredient3 || null;
    this.ingredient4 = data.ingredient4 || null;
    this.country = data.country || null;
    this.price = data.price || null;
    
    
    this.get = function(cb) {
        var q = " SELECT * FROM " + this.table;
    
    
        mysql.query(q, function(rows){
            cb(rows);
        });    
    }
    
    
    this.register = function(){
        var me = this
        q = " INSERT INTO " + this.table + " (name, ingredient, ingredient2, ingredient3, ingredient4) VALUES ('"+this.name+"','"+this.ingredient+"','"+this.ingredient2+"','"+this.ingredient3+"','"+this.ingredient4+"') ";
    
        mysql.query(q, function(rows){
            me.id = rows.insertID;
        });
    }


    this.remove = function(){
        var me = this,
            q = " DELETE from "+this.table+" where ingredient='"+this.ingredient+"'";
     
         mysql.query(q,function(rows){
            me.id = rows.insertId;
        });  
        
    }
    
   return this;
    
}
 
 

