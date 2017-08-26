//Creates a variable data to reference the string "%data%", which will save time
//typing later in the code
var data = "%data%"

//Creates and fills the bio variable with personal information. This information
//will be used later in the code to fill in the header and footer sections.
var bio = {
    "name": "Donny Kemp",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "donny@donnykemp.com",
        "github": "DonnyKemp",
        "twitter": "@tweet",
        "location": "Las Vegas, NV"
    },
    "welcomeMessage": "Welcome to my page. Stay awhile and see what I've done.",
    "skills": [
        "HTML", "CSS", "JavaScript"
    ],
    "biopic": "images/headshot.jpg"
};

//Creates and fills the education variable with education history. This information
//will be used later in the code in the function that displays education history.
var education = {
    "schools": [{
        "name": "Clackamas Community College",
        "location": "Oregon City, OR",
        "degree": "Associates",
        "majors": [
            "General Studies"
        ],
        "dates": "2017",
        "url": "http://www.clackamas.edu/"
    }, ],
    "onlineCourses": [{
        "title": "Intro To Programming",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://udacity.com"
    }]
};

//Creates and fills the work variable with job history information. This information
//will be used later in the function to display work history.
var work = {
    "jobs": [{
            "employer": "Copytronix",
            "title": "Field Service Technician",
            "location": "Portland, OR",
            "dates": "2016-2017",
            "description": "Repair and service copy machines and printers, as well as network troubleshooting."
        },
        {
            "employer": "JPMorgan Chase",
            "title": "Licensed Investment Banker",
            "location": "Molalla, OR",
            "dates": "2012-2016",
            "description": "Helped customers manage bank accounts and investments."
        }
    ]
};

//Creates and fills the projects variable with previous programming projects.
//This information will be used later in the function to display previous projects.
var projects = {
    "projects": [{
        "title": "Star Wars Quiz",
        "dates": "2017",
        "description": "Created a fill in the blanks Star Wars Quiz using Python.",
        "images": ["images/quiz.jpg"]
    }]
};

//Displays the info from bio on the resume page, in the header and footer sections.
//Creates new variables from
//variables in helper.js, by replacing the "%data%" placeholder with information
//stored in my bio section.
bio.display = function() {

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedbiopic = HTMLbioPic.replace(data, bio.biopic);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedtwitter, formattedLocation, );
    $("#header").append(formattedwelcomeMessage);
    $("#header").append(formattedbiopic);

    //Adds skills to the resume page.
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var m = 0, len = bio.skills.length; m < len; m++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[m]);

            $('#skills').append(formattedSkills);
        }
    }
};
//This calls the bio function.
bio.display();

//Displays job history from work on the resume page.
//This creates the work function.
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        formattedEmployer += HTMLworkTitle.replace(data, work.jobs[i].title);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer, formattedDates, formattedLocation, formattedDescription);
    }
};
//This calls the work function.
work.display();

//This adds an internationalize button to the bottom of the page that changes last name to all caps.
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//Displays project information from projects on the resume page.
//This creates the projects function.
projects.display = function() {
    for (var h = 0; h < projects.projects.length; h++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(projects.projects[h].title);
        formattedTitle.attr('href', projects.projects[h].url);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[h].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[h].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (projects.projects[h].images.length > 0) {
            for (var j = 0; j < projects.projects[h].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[h].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
//This calls the projects function.
projects.display();

//Displays education history in education on the resume page.
//This creates the education function.
education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var k = 0; k < education.schools.length; k++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[k].name).replace("#", education.schools[k].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[k].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[k].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[k].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[k].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        //This section adds the online education history.
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            for (var l = 0; l < education.onlineCourses.length; l++) {
                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[l].title).replace("#", education.onlineCourses[l].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[l].school);
                var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[l].dates);
                var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[l].url).replace("#", education.onlineCourses[l].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};
//This calls the education function.
education.display();

$("#mapDiv").append(googleMap);

//This tracks the mouse clicks on the page.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
