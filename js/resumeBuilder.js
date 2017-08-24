//Creates and fills the bio variable with personal information.
var bio = {
  "name" : "Donny Kemp",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "donny@donnykemp.com",
    "mobile" :"555-555-5555",
    "github" : "DonnyKemp",
    "twitter" : "@tweet",
    "location" : "Las Vegas, NV"
  },
  "welcome" : "Welcome to my page. Stay awhile and see what I've done.",
  "skills" : [
    "HTML", "CSS", "JavaScript"
  ],
  "biopic" : "images/headshot.jpg"
};


//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//Creates and fills the work variable with job history information.
var work = {
  "jobs" : [
    {
      "employer" : "Copytronix",
      "title" : "Field Service Technician",
      "location" : "Portland, OR",
      "dates" : "2016-2017",
      "description" : "Repair and service copy machines and printers, as well as network troubleshooting."
    },
    {
      "employer" : "JPMorgan Chase",
      "title" : "Licensed Investment Banker",
      "location" : "Molalla, OR",
      "dates" : "2012-2016",
      "description" : "Helped customers manage bank accounts and investments."
    }
  ]
};

//Creates and fills the projects variable with previous programming projects.
var projects = {
    "projects": [{
        "title": "Star Wars Quiz",
        "dates": "2017",
        "description": "Created a fill in the blanks Star Wars Quiz using Python.",
        "images": ["images/quiz.jpg"]
  }]
};

//Creates and fills the education variable with education history.
var education = {
  "schools": [
    {
      "name": "Clackamas Community College",
      "location": "Oregon City, OR",
      "degree": "Associates",
      "major": "General Studies",
      "dates": 2017,
      "url" : "http://www.clackamas.edu/"
    },
  ],
  "onlineCourses" : [
    {
        "title" : "Intro To Programming",
        "school" : "Udacity",
        "dates" : 2017,
        "url" : "http://udacity.com"
    }
  ]
};




//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


//Displays the info from bio on the resume page.
//This creates the bio function.
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedbioGithub);
    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedbioTwitter);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedbioLocation);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedwelcomeMessage);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedbioTwitter);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedbioLocation);
};
//This calls the bio function.
bio.display();

//Adds skills to the resume page.
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

//Displays job history from work on the resume page.
//This creates the work function.
work.display = function(){
    for(var i = 0; i < work.jobs.length; i++){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        formattedEmployer += HTMLworkTitle.replace("%data%",work.jobs[i].title);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer,formattedDates,formattedLocation,formattedDescription);
    }
};
//This calls the work function.
work.display();

//This adds an internationalize button to the bottom of the page that changes last name to all caps.
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

//Displays project information from projects on the resume page.
//This creates the projects function.
projects.display = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(projects.projects[i].title);
        formattedTitle.attr('href',projects.projects[i].url);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        if(projects.projects[i].images.length > 0){
           for(var j = 0; j < projects.projects[i].images.length; j++){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
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
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
//This section adds the online education history.
			if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);

			for(var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

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

    logClicks(x,y);
});
