const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});





const eventsData = {
  1: {
      description: "Climbing Session: Basic climbing techniques and fun.",
      location: "local mountain",
      photos: [
        "https://storage.googleapis.com/a1aa/image/WEuZaHxYwDZKPpscpLfzfCBIWPa8yQo8yf6ogNuyQdx8atCoA.jpg"
      ]
  },
  2: {
      description: "Master essential belaying skills, including safety techniques, knot tying, and effective climber-belayer communication. Perfect for beginners and those refining their skills.",
      location: "climbing gym",
      photos: [
        "https://media.istockphoto.com/id/1805589586/vector/rope-access.jpg?s=612x612&w=0&k=20&c=ukyB6L31ZAfzPKkypJdNSAkGccp3oX3HImgeJU3wpdg="
      ]
  },
  3: {
      description: "Advanced Climbing: For experienced climbers.",
      location: "Rocky Mountain, Colorado",
      photos: [
        "https://themountainguides.com/wp-content/uploads/2017/06/25BF973D-1C7B-46BC-BF21-93BDD451D1F6-990x660.jpeg"
      ]
  },
  4: {
      description: "Team Meeting: Discuss upcoming climbs and events.",
      location: "Climbing Club HQ",
      photos: [
        "https://sundeviltimes.com/wp-content/uploads/2022/04/Screenshot-2022-04-18-9.19.23-AM-475x354.png"
      ]
  },
  5: {
      description: "Test your skills in an exciting bouldering competition featuring dynamic routes and challenges for climbers of all levels. Compete, connect, and conquer!",
      location: "Gravity Bouldering Gym",
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiVavHIGJRGRiIR9KqtW-d4An-rVFC3bbBg&s"
      ]
  },
  6: {
      description: "Showcase your climbing prowess in a thrilling lead climbing competition. Tackle challenging routes and compete for the top spot in a supportive and electrifying environment.",
      location: "Apex Climbing Center",
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoGH_-UPdMHf8jAf1D4SqG96a-a2WvxCpYw&s"
      ]
  }
};
const registerEventSection = document.getElementById('registerEventSection');
const eventDescription = document.getElementById('eventDescription');
const eventLocation = document.getElementById('eventLocation');
const eventPhotos = document.getElementById('eventPhotos');
const registerButton = document.getElementById('registerButton');

function showEventDetails(eventId) {
  const eventData = eventsData[eventId];

  if (eventData) {
      eventDescription.innerHTML = `<label>Event Description</label><p>${eventData.description}</p>`;
      eventLocation.innerHTML = `<label>Location</label><p>${eventData.location}</p>`;

      eventPhotos.innerHTML = "<label>Photos</label>";
      eventData.photos.forEach(photo => {
          const img = document.createElement("img");
          img.src = photo;
          img.alt = "Event Photo";
          eventPhotos.appendChild(img);
      });

      registerEventSection.style.display = "block";
  }
}

document.querySelectorAll(".calendar-grid .event").forEach(event => {
  event.addEventListener("click", function() {
      const eventId = event.dataset.eventId;
      showEventDetails(eventId);
  });
});

registerButton.addEventListener('click', function() {
  alert("You have registered for the event!");
});