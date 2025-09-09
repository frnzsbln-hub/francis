function openBooking(movie) {
  document.getElementById("movies").classList.add("hidden");
  document.getElementById("booking").classList.remove("hidden");
  document.getElementById("movieTitle").value = movie;
}

function closeBooking() {
  document.getElementById("movies").classList.remove("hidden");
  document.getElementById("booking").classList.add("hidden");
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const movie = document.getElementById("movieTitle").value;
  const name = document.getElementById("customerName").value;
  const seats = document.getElementById("seatCount").value;
  const date = document.getElementById("showDate").value;

  const booking = {
    movie, name, seats, date
  };

  // Save booking in localStorage
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("booking").classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");
  document.getElementById("confirmText").textContent =
    `Thank you, ${name}! You booked ${seats} seat(s) for "${movie}" on ${date}.`;
});

function closeConfirmation() {
  document.getElementById("confirmation").classList.add("hidden");
  document.getElementById("movies").classList.remove("hidden");
}
