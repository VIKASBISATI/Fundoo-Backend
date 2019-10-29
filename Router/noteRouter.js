//Author :-sai venkata vikas bisati

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
router.post('/labelToNotes',noteVerify.verifyToken,noteController.labelToNotes);
//crud for labels
router.post('/createLabel',noteVerify.verifyToken,noteController.createLabel);
router.get('/getLabels',noteVerify.verifyToken,noteController.getLabels);
router.delete('/deleteLabel',noteVerify.verifyToken,noteController.deleteLabel);
router.put('/updateLabel',noteVerify.verifyToken,noteController.updateLabel);
//pin notes routes
router.post('/pinNotes',noteVerify.verifyToken,noteController.pinNotes);
router.post('/unPinNotes',noteVerify.verifyToken,noteController.unPinNotes);
module.exports=router 