import { defineStore } from "pinia";

export const useQuizStore = defineStore("quizStore", {
    state: () => ({
        quizes: 
        [
            {
                "id": 1,
                "img": "https://media.istockphoto.com/id/636332456/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JxabGRBRIDNA391sVsoAOk9lcU6kji4vp7YyE0tt-NI=",
                "name": "Math",
                "questions": [
                    {
                        "id": 1,
                        "text": "8 / 2(2 + 2)",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "16",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "1",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "12",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "8 * 8",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "64",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "88",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "48",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "3000 / 3",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "1000",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "100",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "333",
                                "isCorrect": false 
                            }
                        ]
        
                    }
        
                ]
            },
        
            {
                "id": 2,
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkpIy8_UaFDunjus7nDdYCdxZEswvmpg8Kg&usqp=CAU",
                "name": "Biology",
                "questions": [
                    {
                        "id": 1,
                        "text": " Жидкая ткань?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Кровь",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Лимфа",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Слюна",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "Что такое микология?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Наука о микроорганизмах",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Наука о водорослях",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Наука о грибах",
                                "isCorrect": true 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "Пигмент зеленого цвета?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Хлоропласт",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Хлорофилл",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Гринопласт",
                                "isCorrect": false 
                            }
                        ]
        
                    }
                ]
            },
        
            {
                "id": 3,
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW33EyTz6JxtxOgmd3s0ACmq2foTJIUm-izw&usqp=CAU",
                "name": "Chemisty",
                "questions": [
                    {
                        "id": 1,
                        "text": "как обозначается кальций",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "С",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Ca",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Cal",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "Самый твердый драгоценный камень",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Сапфир",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Алмаз",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Рубин",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "Формула воды",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "HN2O",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "H2O",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "HR3O",
                                "isCorrect": false 
                            }
                        ]
        
                    }
                ]
            },
        
            {
                "id": 4,
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yWEOsNowNciOteA454esgndOFSV_LJsDAPvMJRelz4cikCiJszNS2IazyZZwmnvXhzA&usqp=CAU",
                "name": "Hestory",
                "questions": [
                    {
                        "id": 1,
                        "text": "Когда началась Первая Мировая война?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "1911",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "1910",
                                "isCorrect": true 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "1917",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "Какая самая древняя цивилизация в мире?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Цивилизация Древнего Египта ",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Индская цивилизация",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Древняя Месопотамия",
                                "isCorrect": true 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "Какая последняя династия в Китае?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Цин",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Мин",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Хань",
                                "isCorrect": false 
                            }
                        ]
        
                    }
        
                ]
            },
        
            {
                "id": 5,
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM7NwXlsTUI8op_rmlKEo8JKICYcYF5QrpA&usqp=CAU",
                "name":"Literature",
                "questions": [
                    {
                        "id": 1,
                        "text": "Кодовое слово, по которому открывались двери одной подземной сокровищницы?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Ахалай-махалай",
                                "isCorrect": false 
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Сим-салабим",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Сезам",
                                "isCorrect": true 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "Краткий иносказательный рассказ в стихах или прозе с нравоучительным выводом?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Сказка",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Басня",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Ода",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "Имя богатыря из города Мурома?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "Илья",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "Добрыня",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "Алеша",
                                "isCorrect": false 
                            }
                        ]
        
                    }
        
                ]
            },
        
            {
                "id": 6,
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy56vzLzYOliqDLHt0LGs14DcYr10N6Yy-og&usqp=CAU",
                "name":"Physics",
                "questions": [
                    {
                        "id": 1,
                        "text": "Модель идеального газа предполагает, что",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "молекулы неподвижны",
                                "isCorrect": false
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "молекулы не имеют размеров",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "молекулы не взаимодействуют друг с другом",
                                "isCorrect": true 
                            }
                        ]
        
                    },
        
                    {
                        "id": 2,
                        "text": "Какие физические величины относятся к термодинамическим параметрам идеального газа?",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "температура, объём, концентрация молекул",
                                "isCorrect": true
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "объём, давление, температура",
                                "isCorrect": false 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "давление и масса",
                                "isCorrect": false 
                            }
                        ]
        
                    },
        
                    {
                        "id": 3,
                        "text": "Ускорение — это……",
                        "options": [
                            {
                                "id": 1,
                                "label": "A",
                                "text": "изменение положения тела с течение времени",
                                "isCorrect": false 
        
                            },
                            {
                                "id": 2,
                                "label": "B",
                                "text": "изменение скорости тела за единицу времени",
                                "isCorrect": true 
                            },
                            {
                                "id": 3,
                                "label": "C",
                                "text": "изменение положения тела относительно других тел",
                                "isCorrect": false 
                            }
                        ]
        
                    }
        
                ]
            }
        
        ]
    })
})