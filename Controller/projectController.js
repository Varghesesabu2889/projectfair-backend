const projects = require ('../Models/projectSchema')




//add projects

exports.addProjects = async(req,res)=>{
    console.log("Inside add project function");
    // res.status(200).json("add project request")
    const userId =  req.payload
    const projectImage =req.file.filename
    //console.log(projectImage);
    const {title,languages,github,website,overview}=req.body

   // console.log(`${title} ${languages} ${github} ${website}${overview}${userId}`)
    //res.status(200).json("addProject request received")


try{
    const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project already exists ... upload another one")
        }else{
            const newProject = new projects({
                title,languages,github,website,overview,projectImage,userId

            })
            await newProject.save()
            res.status(200).json(newProject)
              
            }
        }
            
    catch(err){
        res.status(401).json(`Request failed,Error ${err}`)
    }
}
