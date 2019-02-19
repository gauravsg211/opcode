var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var employeeSchema =new Schema({
	
	user_name:String,
	
	email:{
		type:String,
		unique:true
	},
	
	password:
	{
		
		type:String,
		required:true
	},
	
	skills:{
		
		type:Array
		
		
	},
	
	admin:
	{type:Boolean
		
	}
		
		
	});
	module.exports= mongoose.model('Employee',employeeSchema);

	
	
