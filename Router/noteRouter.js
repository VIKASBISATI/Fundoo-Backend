const express=require('express')
const router=express.Router();
const noteController=require('../Controller/noteController')
const noteVerify=require('../MiddleWare/token')

router.post('/addNotes',noteVerify.verifyToken,noteController.addNotes)
router.get('/getNotes',noteVerify.verifyToken,noteController.getNotes)
router.post('/updateNotes',noteVerify.verifyToken,noteController.updateNotes);
router.post('/archive',noteVerify.verifyToken,noteController.archive);
router.post('/unArchive',noteVerify.verifyToken,noteController.unArchive);
router.post('/trash',noteVerify.verifyToken,noteController.trash);
router.post('/restore',noteVerify.verifyToken,noteController.restore);
router.post('/addColor',noteVerify.verifyToken,noteController.addColor);
router.delete('/deleteForever',noteVerify.verifyToken,noteController.deleteForever);
router.post('/labelToNotes',noteVerify.verifyToken,noteController.labelToNotes)
module.exports=router 