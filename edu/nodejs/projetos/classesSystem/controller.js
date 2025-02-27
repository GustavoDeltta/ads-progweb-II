const ClassRepository = require("./classesRepository");

const classRepository = new ClassRepository();

function getClasses(request, reply) {
  const allClasses = classRepository.getClasses();

  const data = {
    classes: allClasses,
    date: new Date(),
  };

  reply.status(200).json(data);
}

function insertClass(request, reply) {
  let { myClass } = request.body;

  console.log(request.body)

  classRepository.insertClass(myClass);
  reply.status(201).json("Insert class successfully");
}

function updateClass(request, reply) {
  let {myClass} = request.body;
  let {id} = request.params;

  console.log(myClass, id);

  const response = classRepository.updateClass(myClass, id);

  if(response.error){
    reply.status(404).json(response.error);
    return;
  }

  reply.status(200).json("Update class successfully");
}

function deleteClass(request, reply){
  let {id} = request.params;

  const response = classRepository.deleteClass(id);

  if(response.error){
    reply.status(404).json(response.error);
    return;
  }

  reply.status(200).json("Update class successfully");
}

module.exports = { getClasses, insertClass, updateClass, deleteClass };
