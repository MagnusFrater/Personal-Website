//######################
//         MAIN
//######################
function showModal(i) {

  /*
  var img = $(i).find('img');
  var vibrant = new Vibrant(img);

  img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();

    $('#APOD-modal-header').css('background-color', swatches[0].getRgb());
    $('#APOD-modal-footer').css('background-color', swatches[0].getRgb());
  });
  */

  document.getElementById(i).style.display = 'block';
}

function hideModal(i) {
  document.getElementById(i).style.display = 'none';
}

/* ######################
        Mars Trek
#########################*/
var roverData = {
  'bCLS': { 
    title: 'Curiosity Landing Site', 
    url: '/resource/naf/CuriosityRover.jpg', 
    desc: 'Curiosity is a car-sized robotic rover exploring Gale Crater on Mars as part of NASA\'s Mars Science Laboratory mission (MSL).[3] As of October 8, 2016, Curiosity has been on Mars for 1484 sols (1524 total days) since landing on August 6, 2012. The rover\'s goals include: investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for future human exploration.', 
    citation: 'https://en.wikipedia.org/wiki/Curiosity_(rover)'
  },
  'bSLS': { 
    title: 'Spirit Landing Site', 
    url: '/resource/naf/SpiritRover.jpg', 
    desc: 'Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from 2004 to 2010.[1] It was one of two rovers of NASA\'s ongoing Mars Exploration Rover Mission. It landed successfully on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in late 2009, and its last communication with Earth was sent on March 22, 2010.', 
    citation: 'https://en.wikipedia.org/wiki/Spirit_(rover)'
  },
  'bOLS': { 
    title: 'Opportunity Landing Site', 
    url: '/resource/naf/OpportunityRover.jpg', 
    desc: 'Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover active on Mars since 2004.[1] Launched on July 7, 2003 as part of NASA\'s Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet.[7] With a planned 90 sol duration of activity, Spirit functioned until getting stuck in 2009 and ceased communications in 2010, while Opportunity remains active as of 2016, having already exceeded its operating plan by 12 years, 165 days (in Earth time). Opportunity has continued to move, gather scientific observations, and report back to Earth for almost 50 times its designed lifespan.', 
    citation: 'https://en.wikipedia.org/wiki/Opportunity_(rover)' 
  }
}

var marsData = {
  'bMarsColor': { title: 'Mars Color' },
  'bMarsGray': { title: 'Mars Grayscale' },
  'bMarsEast': { title: 'Mars East' },
  'bMC11': { title: 'MC11' }
}

$('#RoverButtons').on('click', 'button', function (event) {
  //change iframe data
  var node = $(event.target);
  var src = node.data('src');
  var id = node.data('id');

  $('#RoverMapsFrame').attr('src', src);
  $('#RoverInfo').text(roverData[id].title);

  //change modal data
  var container = $('#MarsRover-modal');
  container.find('#MarsRover-title').text(roverData[id].title);
  container.find('#MarsRover-img').attr('src', roverData[id].url).width(200);
  container.find('#MarsRover-p').text(roverData[id].desc);
  container.find('#MarsRover-citation').attr("href", roverData[id].citation);
});

$('#MarsButtons').on('click', 'button', function (event) {
  var node = $(event.target);
  var src = node.data('src');
  var id = node.data('id');

  $('#MarsMapsFrame').attr('src', src);
  $('#MarsInfo').text(marsData[id].title);
});

//######################
//         APOD
//######################
$.get({
  url: 'https://api.nasa.gov/planetary/apod',
  data: {
    api_key: 'Vi3EF9pk2bwUo74sjFVfwMlzCHRFmii2940oewlC',
    hd: true,
    //date: '2016-01-15'
  },
  success: function (data) {
    var APODmain = $('#APOD-main');
    var APODmodal = $('#APOD-modal');

    APODmain.find('#APOD-hdurl').attr('src', data.hdurl);

    APODmodal.find('#APOD-title').text(data.title);
    APODmodal.find('#APOD-copyright-date').text(data.copyright +", "+ data.date);
    APODmodal.find('#APOD-url').attr('src', data.url).width(200);
    APODmodal.find('#APOD-explanation').text(data.explanation);
  }
})