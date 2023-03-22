<script setup>
import { defineProps } from "vue"
import {RouterLink} from "vue-router"

const{quizQuestionLength, numberOfCorrectAnswers} = defineProps (["quizQuestionLength", "numberOfCorrectAnswers"])
</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>
            {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink class="go-back" to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }
    p {
        font-size: 25px;
    }
    h1 {
        font-size: 80px;
        margin-bottom: 30px;
    }
    .go-back {
        
        padding: 10px 20px;
        text-decoration: none;
        font-size: 26px;
        color: black;
        border: 1px solid bisque;
        box-shadow: 0 0 15px bisque;
    }
</style>