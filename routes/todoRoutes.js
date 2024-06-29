const express=require('express');
const router=express.Router();
const {createItems,deleteItem,getItems,updateItem, updateStatus}=require('../controller/Items');

router.get('/get',getItems);
router.post('/create',createItems);
router.put('/update/:id',updateItem);
router.put('/updateStatus/:id',updateStatus);
router.delete('/delete/:id',deleteItem);

module.exports=router;