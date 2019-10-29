const noteSchema = require('../App/Model/noteModel');
const labelSchema = require('../App/Model/labelModel')
exports.addNotes = (req) => {
    try {
        console.log(req.body);
        return new Promise((resolve, reject) => {
            var dataNote = new noteSchema.note({
                "userId": req.decoded.payload,
                "title": req.body.title,
                "description": req.body.description,
                // "color":req.body.color,
                // "reminder":req.body.reminder,
                // "isArchive":req.body.isArchive,
            });
            dataNote.save((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}
exports.getAllNotes = (req) => {
    try {
        console.log("req in get all notes", req);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "userId": req.decoded.payload }, {}, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}
exports.updateNotes = (req) => {
    try {
        console.log("req in update notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.update({ "_id": req.body.noteId }, {
                        $set: {
                            title: req.body.title,
                            description: req.body.description
                        }
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })

                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}
exports.archive = (req) => {
    try {
        console.log("req in archive notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.update({ "_id": req.body.noteId }, {
                        $set: {
                            // "isArchive":req.body.isArchive
                            "isArchive": true
                        }
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })

                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}

exports.unArchive = (req) => {
    try {
        console.log("req in unArchive notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.update({ "_id": req.body.noteId }, {
                        $set: {
                            // "isArchive":req.body.isArchive
                            "isArchive": false
                        }
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })

                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}


exports.trash = (req) => {
    try {
        console.log("req in unArchive notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.update({ "_id": req.body.noteId }, {
                        $set: {
                            // "isTrash":req.body.isTrash
                            "isTrash": true
                        }
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })

                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}


exports.restore = (req) => {
    try {
        console.log("req in unArchive notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.update({ "_id": req.body.noteId }, {
                        $set: {
                            // "isTrash":req.body.isTrash
                            "isTrash": false
                        }
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })

                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}



exports.deleteForever = (req) => {
    try {
        console.log("req in delete forever notes", req.body);
        return new Promise((resolve, reject) => {
            noteSchema.note.find({ "_id": req.body.noteId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.deleteOne({ "_id": req.body.noteId }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    })
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}


exports.labelToNotes = (req) => {
    try {
        console.log("req in label to notes", req.body);
        console.log("req of user is ", req.decoded.payload);

        return new Promise((resolve, reject) => {
            noteSchema.note.updateOne({ "_id": req.body.noteId }, {
                $push: {
                    "labels": {
                        "labelName": req.body.labelName,
                        "noteId": req.body.noteId,
                        "userId": req.decoded.payload
                    }
                }
            }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.findOne({ "_id": req.body.noteId }, (err, res) => {
                        if (err) {
                            console.log("err");
                        } else {
                            console.log("result is", res);
                        }
                    })
                    console.log("after succesful response the result is", result);
                    resolve(result)
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}

//crud for labels

exports.createLabel = (req) => {
    try {
        console.log("req in create labels", req.body);
        return new Promise((resolve, reject) => {
            var labelData = new labelSchema.label({
                "userId": req.decoded.payload,
                "labelName": req.body.labelName
            })
            labelData.save((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}



exports.getLabels = (req) => {
    try {
        console.log("req in get labels", req.decoded.payload);
        return new Promise((resolve, reject) => {
            labelSchema.label.find({ "userId": req.decoded.payload }, {}, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}



exports.deleteLabel = (req) => {
    try {
        console.log("req in delete labels", req.decoded.payload);
        return new Promise((resolve, reject) => {
            labelSchema.label.find({ "labelId": req.body.labelId }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    labelSchema.label.deleteOne({ "_id": req.body.labelId }, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {
                            console.log("yes enterekd to success", req.body.labelId);
                            console.log("yes data to success", data);
                            resolve(data)
                        }
                    })
                }
            })

        })
    } catch (e) {
        console.log(e);
    }
}

exports.updateLabel = (req) => {
    try {
        console.log("req in update labels", req.decoded.payload);
        return new Promise((resolve, reject) => {
            labelSchema.label.findOne({ "_id": req.body.labelId }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    labelSchema.label.updateOne({ "_id": req.body.labelId },
                        { "labelName": req.body.labelName }, (err, data) => {
                            if (err) {
                                reject(err)
                            } else {
                                console.log("yes enterekd to success", req.body.labelId);
                                console.log("yes data to success", data);
                                resolve(data)
                            }
                        })
                }
            })

        })
    } catch (e) {
        console.log(e);
    }
}


exports.pinNotes = (req) => {
    try {
        console.log("req in pin notes ", req.decoded.payload);
        return new Promise((resolve, reject) => {
            noteSchema.note.findOne({ "_id": req.body.noteId }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.updateOne({ "_id": req.body.noteId },
                        { "isPinned": true }, (err, data) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(data)
                            }
                        })
                }
            })  

        })
    } catch (e) {
        console.log(e);
    }
}


exports.unPinNotes = (req) => {
    try {
        console.log("req in un pin notes ", req.decoded.payload);
        return new Promise((resolve, reject) => {
            noteSchema.note.findOne({ "_id": req.body.noteId }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    noteSchema.note.updateOne({ "_id": req.body.noteId },
                        { "isPinned": false }, (err, data) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(data)
                            }
                        })
                }
            })

        })
    } catch (e) {
        console.log(e);
    }
}


