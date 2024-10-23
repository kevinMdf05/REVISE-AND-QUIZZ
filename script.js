document.addEventListener('DOMContentLoaded', function () { 
    const questions = [  
        {
            theme: "HTML/CSS",
            quiz: [
                {
                    question: "Quel est l'élément HTML utilisé pour le texte le plus important?",
                    options: ["<h1>", "<header>", "<strong>", "<important>"],
                    answer: 0,
                    explanation: "La balise <h1> est utilisée pour le texte le plus important, souvent le titre principal d'une page."
                },
                {
                    question: "Que signifie CSS ?",
                    options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
                    answer: 2,
                    explanation: "CSS signifie Cascading Style Sheets."
                },
                {
                    question: "Comment insérer un commentaire en CSS ?",
                    options: ["/* commentaire */", "// commentaire //", "<!-- commentaire -->", "` commentaire `"],
                    answer: 0,
                    explanation: "Les commentaires en CSS sont insérés avec /* commentaire */."
                },
                {
                    question: "Quel attribut HTML est utilisé pour définir des feuilles de style en ligne?",
                    options: ["class", "style", "styles", "font"],
                    answer: 1,
                    explanation: "L'attribut 'style' est utilisé pour définir des styles en ligne."
                },
                {
                    question: "Quelle propriété CSS contrôle la taille du texte ?",
                    options: ["font-style", "text-style", "font-size", "text-size"],
                    answer: 2,
                    explanation: "La propriété 'font-size' contrôle la taille du texte."
                }
            ]
        },
        {
            theme: "Anglais",
            quiz: [
                {
                    question: "Quel temps est utilisé pour parler d'une action habituelle dans le passé?",
                    options: ["Past simple", "Past continuous", "Past perfect", "Used to"],
                    answer: 3,
                    explanation: "L'expression 'used to' est souvent utilisée pour parler d'habitudes dans le passé."
                },
                {
                    question: "Quelle est la traduction de 'apple'?",
                    options: ["Banane", "Pomme", "Orange", "Raisin"],
                    answer: 1,
                    explanation: "'Apple' se traduit par 'pomme'."
                },
                {
                    question: "Comment dit-on 'Thank you' en français?",
                    options: ["Merci", "Bonjour", "S'il vous plaît", "Au revoir"],
                    answer: 0,
                    explanation: "'Thank you' se traduit par 'Merci'."
                },
                {
                    question: "Quel mot n'est PAS un adverbe?",
                    options: ["Quickly", "Beautifully", "Careful", "Sadly"],
                    answer: 2,
                    explanation: "'Careful' est un adjectif, pas un adverbe."
                },
                {
                    question: "Que signifie 'to be on cloud nine'?",
                    options: ["Être très triste", "Être en colère", "Être très heureux", "Être confus"],
                    answer: 2,
                    explanation: "'To be on cloud nine' signifie être très heureux."
                }
            ]
        },
        {
            theme: "JavaScript",
            quiz: [
                {
                    question: "Que fait 'console.log()'?",
                    options: ["Affiche un message dans la console web", "Envoie un log à un serveur", "Efface la console", "Rien"],
                    answer: 0,
                    explanation: "'console.log()' est utilisé pour afficher des messages dans la console web."
                },
                {
                    question: "Quel symbole est utilisé pour commenter une ligne en JavaScript?",
                    options: ["//", "--", "/*", "**"],
                    answer: 0,
                    explanation: "Le symbole // est utilisé pour commenter une seule ligne en JavaScript."
                },
                {
                    question: "Comment déclarer une variable en JavaScript?",
                    options: ["var nomDeLaVariable;", "variable nomDeLaVariable;", "v nomDeLaVariable;", "declare nomDeLaVariable;"],
                    answer: 0,
                    explanation: "On déclare une variable en JavaScript avec 'var', 'let', ou 'const'."
                },
                {
                    question: "Quel objet JavaScript permet de travailler avec des dates?",
                    options: ["String", "Date", "Time", "Clock"],
                    answer: 1,
                    explanation: "L'objet 'Date' permet de travailler avec des dates en JavaScript."
                },
                {
                    question: "Comment créer une fonction en JavaScript?",
                    options: ["function maFonction() {}", "function: maFonction() {}", "function = maFonction() {}", "create function maFonction() {}"],
                    answer: 0,
                    explanation: "Une fonction en JavaScript est créée avec la syntaxe 'function maFonction() {}'."
                }
            ]
        },
        {
            theme: "Python",
            quiz: [
                {
                    question: "Comment créer une liste en Python?",
                    options: ["[]", "{}", "()", "||"],
                    answer: 0,
                    explanation: "Les listes en Python sont créées avec des crochets []."
                },
                {
                    question: "Quel mot-clé est utilisé pour définir une fonction en Python?",
                    options: ["function", "def", "func", "declare"],
                    answer: 1,
                    explanation: "Le mot-clé 'def' est utilisé pour définir une fonction en Python."
                },
                {
                    question: "Comment ajouter un élément à une liste en Python?",
                    options: ["append()", "add()", "push()", "put()"],
                    answer: 0,
                    explanation: "La méthode 'append()' est utilisée pour ajouter un élément à une liste en Python."
                },
                {
                    question: "Quel module Python est utilisé pour travailler avec les expressions régulières?",
                    options: ["re", "regex", "string", "text"],
                    answer: 0,
                    explanation: "Le module 're' est utilisé pour travailler avec les expressions régulières en Python."
                },
                {
                    question: "Comment générer un nombre aléatoire entre 1 et 10 en Python?",
                    options: ["random(1, 10)", "rand(1, 10)", "random.randint(1, 10)", "rand.range(1, 10)"],
                    answer: 2,
                    explanation: "La fonction 'random.randint(1, 10)' du module 'random' génère un nombre aléatoire entre 1 et 10."
                }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let currentThemeIndex = null;
    let score = 0;
    let totalQuestions = 0;

    // Fonction pour afficher la sélection de thème
    function showThemeSelection() {
        document.getElementById("theme-selection").style.display = "block";
        document.getElementById("signup-container").style.display = "none";
        document.getElementById("login-container").style.display = "none";
    }

    // Fonction pour démarrer le quiz
    function startQuiz() {
        const select = document.getElementById("theme-select");
        currentThemeIndex = parseInt(select.value);
        currentQuestionIndex = 0;
        score = 0; 
        totalQuestions = questions[currentThemeIndex].quiz.length; 
        document.getElementById("theme-selection").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        showQuestion();
    }

    // Fonction pour afficher la question actuelle
    function showQuestion() {
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        const explanationElement = document.getElementById("explanation");
        const nextButton = document.getElementById("next-button");

        const currentQuiz = questions[currentThemeIndex].quiz;
        const currentQuestion = currentQuiz[currentQuestionIndex];

        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => selectOption(index);
            optionsElement.appendChild(button);
        });

        explanationElement.textContent = "";
        nextButton.style.display = "none"; 
    }

    
    function selectOption(selectedIndex) {   
        const currentQuiz = questions[currentThemeIndex].quiz;
        const currentQuestion = currentQuiz[currentQuestionIndex];
        const explanationElement = document.getElementById("explanation");
        const nextButton = document.getElementById("next-button");

        if (selectedIndex === currentQuestion.answer) {
            explanationElement.textContent = "Bonne réponse ! " + currentQuestion.explanation;
            score++; 
        } else {
            explanationElement.textContent = "Mauvaise réponse. " + currentQuestion.explanation;
        }

        nextButton.style.display = "block"; 
    }

    
    document.getElementById("next-button").onclick = () => { 
        const currentQuiz = questions[currentThemeIndex].quiz;

        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
        } else {
            showDebrief(); 
        }
    };

    // Fonction pour afficher le débriefing
    function showDebrief() {
        const quizContainer = document.getElementById("quiz-container");
        const debriefElement = document.createElement("div");
        debriefElement.innerHTML = `<h2>Débriefing</h2>
                                    <p>Votre score : ${score} sur ${totalQuestions}</p>
                                    <p>${(score / totalQuestions) * 100}% de bonnes réponses.</p>`;
        quizContainer.innerHTML = ""; 
        quizContainer.appendChild(debriefElement);
    }

    // Gestion de l'affichage des formulaires
    function showSignup() {
        document.getElementById("signup-container").style.display = "block";
        document.getElementById("login-container").style.display = "none";
        document.getElementById("theme-selection").style.display = "none";
    }

    function showLogin() {
        document.getElementById("signup-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
        document.getElementById("theme-selection").style.display = "none";
    }

    // Simulation de la connexion
    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        if (username && password) {
            showThemeSelection(); 
        } else {
            alert("Veuillez entrer un nom d'utilisateur et un mot de passe valides.");
        }
    }

    // Simulation de l'inscription
    function handleSignup(event) {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        if (username && email && password) {
            showThemeSelection(); 
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    }

    // Événement pour gérer la connexion et l'inscription
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("signup-form").addEventListener("submit", handleSignup);

    // Événement pour démarrer le quiz après connexion ou inscription
    document.getElementById("start-button").onclick = startQuiz;

    // Événements pour basculer entre connexion et inscription
    document.getElementById("show-login").onclick = (e) => {
        e.preventDefault();
        showLogin();
    };

    document.getElementById("show-signup").onclick = (e) => {
        e.preventDefault();
        showSignup();
    };

    // Lancer l'affichage du formulaire d'inscription par défaut
    showSignup();
});
