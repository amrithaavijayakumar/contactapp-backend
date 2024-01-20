//import db.js
const db=require('../Services/db')

//logic for get contacts
const getAllContacts=()=>{
    return db.contact.find().then((result)=>{
        if(result)
        {
            return{
                statusCode:200,
                contacts:result
            }
        }
        else{
            return{
statusCode:404,
message:"OOPS!!! CONTACT NOT FOUND"
            }
        }
    })
}
//add
const AddContacts=(id,name,address,phone,email,username,password)=>{
    return db.contact.findOne({id}).then((result)=>{
        //if id is present in the db
        if(result)
        {
            return{
                statusCode:404,
                message:"USER ALREADY EXIST"
            }
        }
        else{
            //if id is not present in the db,to save all the data in db
            const newContact=new db.contact({id,name,address,phone,email,username,password})
            newContact.save()
            return{
                statusCode:200,
                message:"USER ADDED SUCCESSFULLY"
            }

        }
    })

}
const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
        if(result)
        {
            return{
                statusCode:200,
                message:"CONTACT DELETED SUCCESSFULLY!"
            }
        }
        else{
            return{
                statusCode:401,
                message:"SORRY!CAN'T DELETE NOW."
            }
        }
    })
    
}
//view contact
const getaContact=(id)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result)
        {
            return{
                statusCode:200,
                contacts:result
            }
        }
        else{
            return{
                    statusCode:404,
                    message:"OOPS!!! CONTACT NOT FOUND"
            }
        }
    })
}
//updatecontact
const updateContact=(id,name,address,phone,email)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result)
            {
                result.id=id;
                result.name=name;
                result.address=address;
                result.phone=phone;
                result.email=email;
                result.save();
                return{
                    statusCode:200,
                    message:'Contact Details Updated Successfully...'
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contact Not Found'
                }
            }
        }
    )
}
module.exports={
    getAllContacts,
    AddContacts,
    deleteContact,
    getaContact,
    updateContact
    
}