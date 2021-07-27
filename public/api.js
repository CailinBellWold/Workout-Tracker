const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];//Looks for ID of last workout based on array length? Maybe?
  },
  async addExercise(data) {
    const id = location.search.split("=")[1]; //What is location? I think this is somehow looking for the last workout id so this exercise can be added to it.

    const res = await fetch("/api/workouts/" + id, { //How to get this ID into the router? We've typically used workouts/:id, then assigned the const beneath
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },
//What is this?
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
