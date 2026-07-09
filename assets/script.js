const searchInput = document.getElementById("projectSearch");
const searchBtn = document.getElementById("searchBtn");
const searchMessage = document.getElementById("searchMessage");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    let project = "";

    if (
        searchText.includes("portfolio") ||
        searchText.includes("personal") ||
        searchText.includes("html") ||
        searchText.includes("css")
    ) {

        project = "portfolio";

    }

    else if (
        searchText.includes("montessori") ||
        searchText.includes("school") ||
        searchText.includes("admission")
    ) {

        project = "montessori";

    }

    else if (
        searchText.includes("textile") ||
        searchText.includes("fabric") ||
        searchText.includes("ecommerce") ||
        searchText.includes("cloth")
    ) {

        project = "textile";

    }

    if (project !== "") {

        searchMessage.textContent = "";
        searchMessage.className = "";

        const btn = document.querySelector(
            `.project-btn[data-project="${project}"]`
        );

        btn.click();

        document.getElementById("journey").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        searchMessage.textContent = "❌ Invalid Project!";
        searchMessage.className = "text-danger text-center mt-3 fw-semibold";

    }

});

const projects = {

    portfolio: {

        image: "assets/resources/portfolio-project.png",

        title: "Portfolio Website",

        description:
            "A fully responsive personal portfolio showcasing my skills, projects, education and certifications with modern UI, smooth animations and clean layouts.",

        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],

        stats: ["12+", "100%", "AOS"],

        statNames: ["Sections", "Responsive", "Animations"],

        live: "https://karthikrajha13.github.io/Portfolio-Project/",

        github: "https://github.com/karthikrajha13/Portfolio-Project"

    },

    montessori: {

        image: "assets/resources/montessori-project.png",

        title: "Montessori Website",

        description:
            "A modern multi-page Montessori school website featuring admissions, programs, gallery, events and contact sections with a clean responsive interface.",

        technologies: ["HTML", "CSS", "Bootstrap"],

        stats: ["8", "100%", "5"],

        statNames: ["Pages", "Responsive", "Sections"],

        live: "https://karthikrajha13.github.io/montessori-school-website/",

        github: "https://github.com/karthikrajha13/montessori-school-website"

    },

    textile: {

        image: "assets/resources/textile-project.png",

        title: "Textile Website",

        description:
            "A responsive textile business website showcasing premium fabrics, product collections, company information and enquiry features with a modern design.",

        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],

        stats: ["6", "100%", "Modern"],

        statNames: ["Pages", "Responsive", "Design"],

        live: "https://karthikrajha13.github.io/textile-website/",

        github: "https://github.com/karthikrajha13/textile-website"

    }

};

const buttons = document.querySelectorAll(".project-btn");

const image = document.getElementById("projectImage");
const title = document.getElementById("projectTitle");
const description = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const live = document.getElementById("liveDemo");
const github = document.getElementById("githubRepo");

const statNumbers = document.querySelectorAll("#journey h4");
const statTexts = document.querySelectorAll("#journey small");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const project = projects[button.dataset.project];

        image.classList.remove("fade-project");
        title.classList.remove("fade-project");
        description.classList.remove("fade-project");
        tech.classList.remove("fade-project");

        void image.offsetWidth;

        image.classList.add("fade-project");
        title.classList.add("fade-project");
        description.classList.add("fade-project");
        tech.classList.add("fade-project");

        image.src = project.image;
        title.textContent = project.title;
        description.textContent = project.description;

        tech.innerHTML = "";

        project.technologies.forEach(item => {

            const badge = document.createElement("span");

            badge.className = "badge bg-primary px-3 py-2";

            badge.textContent = item;

            tech.appendChild(badge);

        });

        for (let i = 0; i < statNumbers.length; i++) {

            if (statNumbers[i]) {
                statNumbers[i].textContent = project.stats[i];
            }

            if (statTexts[i]) {
                statTexts[i].textContent = project.statNames[i];
            }

        }

        live.href = project.live;
        github.href = project.github;

    });

});