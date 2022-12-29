import { defineStore } from "pinia";
import { computed, reactive } from "vue";

const animalsPrivate = [
  {
    name: "dog",
    type: "ground",
    text: "El perro es un animal doméstico, reconocido como un animal fiel a su dueño.",
    show: false,
  },
  {
    name: "fish",
    type: "water",
    text: "El pez, en español, es un animal acuático. Abunda en los océanos, pero también se encuentran en los ríos.",
    show: false,
  },
  {
    name: "cat",
    type: "ground",
    text: "El gato, en español, es un animal doméstico, nocturno y carnívoro.",
    show: false,
  },
  {
    name: "bird",
    type: "air",
    text: "El ave, en español, es un animal volador. Existe millares de especies en el mundo.",
    show: false,
  },
];

export const useAnimals = defineStore("animals", {
  state: () => ({
    animals: [...animalsPrivate],
  }),
  getters: {
    nameAnimals: (state) => state.animals.map((animal) => animal.name),
    typeAnimals: (state) => state.animals.map((animal) => animal.type),
    textAnimals: (state) => state.animals.map((animal) => animal.text),
  },
  actions: {
    showAnimal(name) {
      const index = this.animals.findIndex((animal) => animal.name === name);
      this.animals[index].show = !animals[index].show;
    },
    addAnimal(animal) {
      this.animals.push(animal);
    },
    removeAnimal(name) {
      const index = this.animals.findIndex((animal) => animal.name === name);
      if (index > -1) this.animals.splice(index, 1);
    },
  },
});

/* export const useAnimals = defineStore("animals", () => {
  const animals = reactive([...animalsPrivate]);

  //Getters
  const nameAnimals = computed(() => animals.map((animal) => animal.name));
  const typeAnimals = computed(() => animals.map((animal) => animal.type));
  const textAnimals = computed(() => animals.map((animal) => animal.text));

  //Actions
  function showAnimal(name) {
    const index = animals.findIndex((animal) => animal.name === name);
    animals[index].show = !animals[index].show;
  }
  function addAnimal(animal) {
    animals.push(animal);
  }
  function removeAnimal(name) {
    const index = animals.findIndex((animal) => animal.name === name);
    if (index > -1) animals.splice(index, 1);
  }

  return {
    animals,
    nameAnimals,
    typeAnimals,
    textAnimals,
    showAnimal,
    addAnimal,
    removeAnimal,
  };
}); */
