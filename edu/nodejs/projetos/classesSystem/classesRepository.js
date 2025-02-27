class ClassRepository {

  constructor() {
    this.classes = [];
  }

  getClasses() {
    return this.classes;
  }

  insertClass(classToInsert) {
    this.classes.push(classToInsert);
  }

  updateClass(myClass, id){
    if(this.classes[id]){
      this.classes[id] = myClass;
      return this.classes[id];
    }else{
      return {error:"Indifined position."};
    }
  }

  deleteClass(id){
    if(this.classes[id]){
      let valueDeleted = this.classes[id];

      this.classes.splice(id, 1);

      return valueDeleted;
    }else{
      return {error: "Indifined position."};
    }
  }
  
}

module.exports = ClassRepository;
