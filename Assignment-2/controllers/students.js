import fs from 'fs'
import { get } from 'http'

function GetStudentFromFile(){
    try{
        let data = fs.readFileSync("database/data.json","utf-8")
        data = JSON.parse(data)
        console.log(data)
        return data
    }catch(error){
        console.error(error);
        return [];
    }
}


const getStudent=(req,res)=>{
    let data = GetStudentFromFile();
    res.status(200).json({
           message: "Student fetched successfully",
        success: true,
        data: data
    });
};

const addStudent=(req,res)=>{
    const {name,age,id} = req.body;
    if (!name || !age || !id) {
        return res.status(400).json({
            message: "provide name, age and id",
            success: false
        });
    };
    let data = GetStudentFromFile();
    data.push({name,age,id});
    fs.writeFileSync("database/data.json",JSON.stringify(data,null,2));
    res.status(200).json({
            message: "Student added successfully",
        data,
        success: true
    });
};
const updateStudent = (req, res) => {
    const {id}=req.params;
    const { name, age} = req.body || {};

    if (!name || !age || !id) {
        return res.status(400).json({
            message: "provide name, age and id",
            success: false
        });
    }

    let data = GetStudentFromFile();
    let userIndex = data.findIndex(user => String(user.id) === String(id));

    if (userIndex === -1) {
        return res.status(404).json({
                message: "Student not found",
            success: false
        });
    }

    data[userIndex] = { name, age, id: String(id) };
    fs.writeFileSync("database/data.json", JSON.stringify(data, null, 2));

    res.status(200).json({
            message: "Student updated successfully",
        data,
        success: true
    });
};

const deleteStudent = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "provide id",
            success: false
        });
    }

    let data = GetStudentFromFile();
    let userIndex = data.findIndex(user => String(user.id) === String(id));

    if (userIndex === -1) {
        return res.status(404).json({
                message: "Student not found",
            success: false
        });
    }

    data.splice(userIndex, 1);
    fs.writeFileSync("database/data.json", JSON.stringify(data, null, 2));

    res.status(200).json({
            message: "Student deleted successfully",
        data,
        success: true
    });
};


export { getStudent, addStudent, updateStudent, deleteStudent};
