//On startup
$(document).ready(function () {
  $('section').hide();
  $('.log-out').hide();
  $('#landing-page').show();
});

const API_Key ='BNciuRNtRNFoYYJG';

function getArtistData (searchTerm) {
    let artistSearchBarValue = $('.events-search-bar').val()
    const errorMsg = `   
        <div class='events-row my-events' id='error-message'>      
          <p>${artistSearchBarValue} Not found. Please check spelling or try another artist name.</p>
        </div>`;

    let settings = {
    url:`https://api.songkick.com/api/3.0/search/artists.json?apikey=${API_Key}&query=${searchTerm}`,
    dataType: 'json',
    type: 'GET',
    success: data => {
      try {
        const artistID = data.resultsPage.results.artist[0].id;
        getCalendarData(artistID);
      } catch (error) {
        $('.my-search-results-container').prop('hidden', false).html(errorMsg);
        }
      },
      error: function() {
        $('.my-search-results-container').prop('hidden', false).html(errorMsg);
    },
  };
  $.ajax(settings);
}

function getCalendarData(artistID) {
  let artistSearchBarValue = $('.events-search-bar').val();
  const errorMsg = `   
        <div class='events-row my-events' id='error-message'>      
          <p>No upcoming ${artistSearchBarValue} performances found. Please try a different artist.</p>
        </div>`;  

  let settings = {
    url:`https://api.songkick.com/api/3.0/artists/${artistID}/calendar.json?apikey=${API_Key}`,
    dataType: 'json',
    type: 'GET',
    success: data => {
      console.log(data);
      try { 
        let searchResults = data.resultsPage.results.event.map((item, index) => displaySearchResults(item));
      $('.my-search-results-container').prop('hidden', false).html(searchResults);
      } catch (error) {
        $('.my-search-results-container').prop('hidden', false).html(errorMsg);
        }
      },
      error: function() {
        $('.my-search-results-container').prop('hidden', false).html(errorMsg);
    },
  };
  $.ajax(settings);
}

function displaySearchResults(data) {
 return `   
        <div class='events-row my-events'>      
          <div class='col-3 date-time'>
            <p class='event-date'>${formateDate(data.start.date)}</p>
            <p class='event-time'>${ifNull(data.start.time)}</p>
          </div>
          <div class='col-6 event-info'>
            <p class='event-name'><a href='${data.uri}' class='url-event' target="_blank">${splitEventName(data.displayName)}</a></p>
            <p class='event-venue-name'><a href='${data.venue.uri}' class='url-venue' target="_blank">${data.venue.displayName}</a></p>
            <p class='event-city'>${data.location.city}</p>
          </div>
          <div class='col-3 event-add-button'>
            <p id='add-event-trigger'><i class="fas fa-plus-square fa-2x"></i></p>  
          </div>  
        </div>`;
}
//Functions that format the returned information
function splitEventName(eventName)  {
  const splits = eventName.split('(',2);
  return splits[0];
}

function formateDate(data) {
  return `${data.slice(5, 10)}-${data.slice(0,4)}`;
}

//Convert from military time
function convertAMPM(time) {
  let time_split = time.split(':');
  let hours = parseInt(time_split[0]);
  let minutes = parseInt(time_split[1]);
  let seconds = parseInt(time_split[2]);

  let convertedTime = '';
    if (hours > 0 && hours <= 12) {
      convertedTime= "" + hours;
    } else if (hours > 12) {
      convertedTime= "" + (hours - 12);
    } else if (hours == 0) {
      convertedTime= "12";
    }
  convertedTime += (minutes < 10) ? ":0" + minutes : ":" + minutes; 
  convertedTime += (hours >= 12) ? " PM" : " AM";
  return convertedTime;
};

function ifNull(time) {
  if(time == null) {
    return '';
  } else if (time =='') {
    return '';
  } else {
    let newTime = convertAMPM(time)
    return newTime;
  }
}

//Triggers
//Landing Page Log In
$('#reactLandingPage').on('click', '#login-trigger', event => {
  event.preventDefault();
    $('section').hide();
    $('#login-page').show();
});
//Landing Page Sign Up
$('#reactLandingPage').on('click', '#get-started-trigger', event => {
  event.preventDefault();
    $('section').hide();
    $('#login-page').hide();
    $('#sign-up-page').show();
});
//Not a Member? Sign Up
$('#reactLogin').on('click', '#login-form-signup-trigger', event => {
  event.preventDefault();
    $('section').hide();
    $('#sign-up-page').show();
});
//Already a member? Sign in
$('#reactSignup').on('click', '#login-form-login-trigger', event => {
  event.preventDefault();
    $('section').hide();
    $('#login-page').show();
});
//log into events page
$('#login-events-page').on('click', event => {
  event.preventDefault();
    const email = $('#login-email').val();
    const password = $('#login-password').val();
        if (email === '') {
            alert('Please Add Valid Email');
        } else if (password === '') {
            alert('Please Add Valid Password');
        }
        else {
            const loginUserObject = {
                email: email,
                password: password
            };
            $.ajax({
                type: 'POST',
                url: 'https://capstone-upcoming-events.herokuapp.com/users/login',
                dataType: 'json',
                data: JSON.stringify(loginUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {         
                //hide all the sections
                $('section').hide();
                $('.my-results-header').hide();
                $('.artist-edit-input-container').hide();
                //show events page
                $('#my-events-page').show();
                $('.log-out').show();
                $('.loggedin-user').val(result.email);
                $('#welcome-user').text(`Welcome, ${result.email}`);
                displayMyEvents(result.email);
                displayMyTopFive(result.email);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Please Check Username and Password');
            });
        };
});
//sign up new account
$('#signup-events-page').on('click', event => {
  event.preventDefault();
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();
        if (email === '') {
            alert('Please Add Valid Email');
        } else if (password === '') {
            alert('Please Add Valid Password');
        } 
        else {
            const newUserObject = {
                email: email,
                password: password
            };
            $.ajax({
                type: 'POST',
                url: 'https://capstone-upcoming-events.herokuapp.com/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                //display the results
                alert(`${result.email} created`);               
                //hide all the sections
                $('section').hide();
                $('.artist-edit-input-container').hide();
                //show events page only
                $('.log-out').show();
                $('#my-events-page').show();
                $('.loggedin-user').val(result.email);
                //Create favorite artists object for new user
                $('#welcome-user').text(`Welcome, ${result.email}`);
                createFavArtistsObject(result.email);
                displayMyTopFive(result.email);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        };
});
//log-out
$('.log-out').on('click', event => {
  event.preventDefault();
    location.reload();
})

//Favorite Artist Search Trigger
$('.fa-eye').on('click', event => {
  event.preventDefault();
  const favoriteArtist = $(event.target).closest('.favorites-artist-wrapper').find('.fav-artist-input').val();
  $('.events-search-bar').val('');
  $('.my-results-header').show();
  getArtistData (favoriteArtist);
});

//Edit Top 5 trigger
$('.fa-edit').on('click', event => {
  event.preventDefault();
    const newFavorite1 = $('#artist-1').val();
    const newFavorite2 = $('#artist-2').val();
    const newFavorite3 = $('#artist-3').val();
    const newFavorite4 = $('#artist-4').val();
    const newFavorite5 = $('#artist-5').val();
    const objectId = $('#topArtists-id').val();
    const loggedInUser = $('.loggedin-user').val();

    const editObject = {
    favorites1: newFavorite1,
    favorites2: newFavorite2,
    favorites3: newFavorite3,
    favorites4: newFavorite4,
    favorites5: newFavorite5
    };
    $.ajax({
        type: 'PUT',
        url: `https://capstone-upcoming-events.herokuapp.com/event/topartists/${objectId}`,
        dataType: 'json',
        data: JSON.stringify(editObject),
        contentType: 'application/json'
    })
    .done(function (result) {
        displayMyTopFive(loggedInUser);
    })
    .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
});

function createFavArtistsObject(userEmail) {
    const artistOne = 'Add Artist Name';
    const artistTwo = 'Add Artist Name';
    const artistThree = 'Add Artist Name';
    const artistFour = 'Add Artist Name';
    const artistFive = 'Add Artist Name';
    const loggedInUser = userEmail;

    const newTopFiveObject = {
        user: loggedInUser,
        favorites1: artistOne,
        favorites2: artistTwo,
        favorites3: artistThree,
        favorites4: artistFour,
        favorites5: artistFive
    };
    $.ajax({
        type: 'POST',
        url: 'https://capstone-upcoming-events.herokuapp.com/topartists',
        dataType: 'json',
        data: JSON.stringify(newTopFiveObject),
        contentType: 'application/json'
    })
    .done(function(result) {
        $('#topArtists-id').val(result._id);
    })
    .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}
//Insert values from object
function displayMyTopFive(loggedInUser) {
    let result = $.ajax({
                url: `https://capstone-upcoming-events.herokuapp.com/event/topartists/${loggedInUser}`,
                dataType: "json",
                type: "GET"
            })
            .done(function (result) {
              $('#artist-1').val(result[0].favorites1);
              $('#artist-2').val(result[0].favorites2);
              $('#artist-3').val(result[0].favorites3);
              $('#artist-4').val(result[0].favorites4);
              $('#artist-5').val(result[0].favorites5);
              $('#topArtists-id').val(result[0]._id);
            })
            .fail(function (jqXHR, error, errorThrown) {
              console.log(jqXHR);
              console.log(error);
              console.log(errorThrown);
            });
}
//Search for Artist
$('.events-search-button').on('click', event => {
  event.preventDefault();
  let artist = $('.events-search-bar').val();
  if (artist === '') {
    alert('Please Enter Artist');
  } else {
  getArtistData (artist);
    $('.my-results-header').show();
  }
});

//Add event
$('.my-search-results-container').on('click', '.fa-plus-square', function(event) {
    event.preventDefault();
    const newDate = $(event.target).closest('.my-events').find('.event-date').text();
    const newTime = $(event.target).closest('.my-events').find('.event-time').text();
    const newVenueName = $(event.target).closest('.my-events').find('.event-venue-name').text();
    const newEventName = $(event.target).closest('.my-events').find('.event-name').text();
    const newCity = $(event.target).closest('.my-events').find('.event-city').text();
    const newVenueURL = $(event.target).closest('.my-events').find('.url-venue').attr('href');
    const newEventURL = $(event.target).closest('.my-events').find('.url-event').attr('href');
    const loggedInUser = $('.loggedin-user').val();
    
    const newEventObject = {
        user: loggedInUser,
        date: newDate,
        time: newTime,
        venueName: newVenueName,
        eventName: newEventName,
        city: newCity,
        eventurl: newEventURL,
        venueurl: newVenueURL
    };
    $.ajax({
        type: 'POST',
        url: 'https://capstone-upcoming-events.herokuapp.com/event/create',
        dataType: 'json',
        data: JSON.stringify(newEventObject),
        contentType: 'application/json'
    })
    .done(function(result) {
      displayMyEvents(result.user);
      $(event.target).closest('.my-events').hide();
    })
    .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
    ;
  });

function displayMyEvents(loggedInUser) {
    let result = $.ajax({
                url: "https://capstone-upcoming-events.herokuapp.com/event/get/"+ loggedInUser,
                dataType: "json",
                type: "GET"
            })
            .done(function (result) {  
             let buildTable = '';             
                $.each(result, function (resulteKey, resulteValue) {
                    buildTable += '<div class="events-row my-events">';
                    buildTable += `<input type="hidden" name="event-id" class="event-id" value="${resulteValue._id}">`;
                    buildTable += '<div class="col-3 date-time">';
                    buildTable += `<p class="event-date">${resulteValue.date}</p>`;
                    buildTable += `<p class="event-time">${ifNull(resulteValue.time)}</p>`;
                    buildTable += '</div>';
                    buildTable += '<div class="col-6 event-info">';
                    buildTable += `<p class="event-name"><a href="${resulteValue.eventurl}" class="url-event" target="_blank">${resulteValue.eventName}</a></p>`;
                    buildTable += `<p class="event-venue-name"><a href="${resulteValue.venueurl}" class="url-venue" target="_blank">${resulteValue.venueName}</a></p>`;
                    buildTable += `<p class="event-city">${resulteValue.city}</p>`;
                    buildTable += '</div>';
                    buildTable += '<div class="col-3 event-delete-button">';
                    buildTable += '<p id="delete-event-trigger" class="delete-button"><i class="fas fa-trash-alt fa-2x"></i></p> ';
                    buildTable += '</div>';
                    buildTable += '</div>';
                });
                $('.my-saved-events-container').prop('hidden', false).html(buildTable);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
}
//Delete event
$('.my-saved-events-container').on('click', '.delete-button', function(event) {
    event.preventDefault();
    const loggedInUser = $('.loggedin-user').val();
    let eventId = $(event.target).closest('.my-events').find('.event-id').val();
    $.ajax({
        type: 'DELETE',
        url: `https://capstone-upcoming-events.herokuapp.com/event/delete/${eventId}`
    })
    .done(function (result) {
            displayMyEvents(loggedInUser);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});