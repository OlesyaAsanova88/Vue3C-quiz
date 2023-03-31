<script setup>
  /*import q from "../data/quizes.json"*/
  import { useQuizStore } from "../store/QuizStore"
  import {ref, watch} from "vue"
  import Card from  "../components/Card.vue"
  import gsap from "gsap"

const quizStore = useQuizStore();
const quizes = ref(quizStore)
const search =ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

const beforEnter = (el) => {
// card=enter-from
el.style.opacity = 0
el.style.transform = "translateY(-100px)"
}

const enter = (el) => {
// card-enter-to
gsap.to(el, {
  y: 0,
  opacity: 1,
  duration: 0.4,
  delay: el.dataset.index * 0.3
})
}

const afterLeave = () => {

}
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Serch...">
    </header>
    <div class="options-container"> 

      <TransitionGroup 
      name="card" 
      appear
      @after-leave="afterLeave"
      @before-enter="beforEnter"
      @enter="enter"
      >
        <Card
         v-for="(quiz, index) in quizStore.quizes" 
         :key="quiz.id" 
         :quiz="quiz" 
         :data-index="index"
         />
      </TransitionGroup>
      
    </div>
  </div>
</template>


<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    margin-right: 30px;
  }

  header input {
    border-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
  }
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/*.card-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.card-enter-active {
  transition: all 0.4s ease;
}*/
</style>