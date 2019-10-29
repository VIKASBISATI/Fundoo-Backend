const noteService = require('../Service/noteService');

exports.addNotes = (req, res) => {
    console.log("aaaa", req.decoded.payload)
    req.checkBody('title', 'title is invalid').notEmpty();
    req.checkBody('description', 'description is invalid');
    // req.checkBody('color', "color is invalid");
    // req.checkBody('reminder', "reminder is invalid");
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.addNotes(req)
            .then((data) => {
                console.log("in createController")
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}
exports.getNotes = (req, res) => {
    noteService.getAllNotes(req).then(data => {
        console.log("in get controller", data)
        res.status(200).send(data)
    }).catch(err => {
        res.status(404).send(err);
    })
}
exports.updateNotes = (req, res) => {
    console.log("notes id in controller", req.body.noteId);

    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.updateNotes(req)
            .then((data) => {
                console.log("in update notes controller", data)
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}
exports.archive = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.archive(req)
            .then((data) => {
                console.log("in archive notes controller", data)
                response.data = data;
                response.msg = "archived successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.unArchive = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.unArchive(req)
            .then((data) => {
                console.log("in unarchive notes controller", data)
                response.data = data;
                response.msg = "unarchived successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}


exports.trash = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.trash(req)
            .then((data) => {
                console.log("in trash notes controller", data)
                response.data = data;
                response.msg = "deleted successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.restore = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.restore(req)
            .then((data) => {
                console.log("in restore notes controller", data)
                response.data = data;
                response.msg = "restored successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.deleteForever = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.deleteForever(req)
            .then((data) => {
                console.log("in forever notes controller", data)
                response.data = data;
                response.msg = "deleted note successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.addColor = (req, res) => {
    console.log("notes id in controller", req.body.noteId);
    req.checkBody('noteId', 'id is connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.addColor(req)
            .then((data) => {
                console.log("in color notes controller", data)
                response.data = data;
                response.msg = "added color successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}


exports.labelToNotes = (req, res) => {
    req.checkBody('noteId', 'id  connot be empty').notEmpty();
    req.checkBody('labelName', 'label name  connot be empty').notEmpty();
    console.log("aaaa", req.decoded.payload)
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        noteService.labelToNotes(req)
            .then((data) => {
                console.log("in label to notes controller", data)
                response.data = data;
                response.msg = "added label to notes successfully"
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}