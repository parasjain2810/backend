const Items=require('../model/Items')

exports.createItems=async(req,res)=>{
  try {
     const {title,description}=req.body;

     if(!title||!description){
        return res.status(500).json({
            success:false,
            message:"Please enter title and description"
        })
     }


    const newItem=await Items.create({
        title:title,
        description:description
    })

    return res.status(200).json({
        success:true,
        message:"Item add Successfully",
        newItem
     })

  } catch (error) {
    res.status(501).json({
        success:false,
        message:"Something went wrong",
        error:error
     })
  }
}

exports.updateItem=async(req,res)=>{
    try {
        const{id}=req.params;
        const {title,description}=req.body

        const item=await Items.findById(id);

        if(!item){
            return res.status(502).json({
                success:false,
                message:"Item is Not Found"
             })
        }
        if(!title||!description){
            return res.status(500).json({
                success:false,
                message:"Please enter title and description"
            })
         }
        
        item.title=title
        item.description=description

        item.save();
        return res.status(200).json({
            success:true,
            message:"Item Update Successfully",
         })    
    } catch (error) {
        return res.status(503).json({
            success:false,
            message:"Something went wrong"
         })
    }
}
exports.updateStatus=async(req,res)=>{
    try {
        const{id}=req.params;
        const {status}=req.body;

        const item=await Items.findById(id);

        if(!item){
            return res.status(502).json({
                success:false,
                message:"Item is Not Found"
             })
        }
        
        item.status=!status
        item.save();
        return res.status(200).json({
            success:true,
            message:"Item status Update Successfully",
            status:status
         })    
    } catch (error) {
        return res.status(503).json({
            success:false,
            message:"Something went wrong"
         })
    }
}

exports.deleteItem=async(req,res)=>{
    try {
        const {id}=req.params;

        if(!id){
            return res.status(504).json({
                success:false,
                message:"No id is Not Found"
             })
        }

        const item=await Items.findById(id);
        if(!item){
            return res.status(504).json({
                success:false,
                message:"No Item is Not Found"
             })
        }

        await item.deleteOne();

        return res.status(203).json({
            success:true,
            message:"Item Delete Successfully"
        })

    } catch (error) {
        return res.status(505).json({
            success:false,
            message:"Some thing went wrong"
         })
    }
}

exports.getItems=async(req,res)=>{
    try {
        const items=await Items.find();

       return res.status(200).json({
        success:true,
        items:items
       })
    } catch (error) {
        return res.status(505).json({
            success:false,
            message:"Some thing went wrong",
            error:error
         })
    }
}