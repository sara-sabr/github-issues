var issuesRaw = '../issues.json';

var initiatives = [
  {
    name: "TSDM",
    description: "Milestones and issues for TSDM",
    milestones: [
      {
        name: "Target SDM - Agile fw - Produce Business Case",
        description: "Gaining approval is treated as a separate milestone.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/63",
        start_date: "",
        end_date: "",
        creation_date: "2020-12-30",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Target SDM - Agile fw - Do Research",
        description: "",
        url: "",
        start_date: "",
        end_date: "",
        creation_date: "2020-12-30",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "ABB",
    description: "Milestones and issues for ABB",
    milestones: [
      {
        name: "Adopt, buy or build - Enterprise Architecture",
        description: "Includes all issues for the ABB Strategy",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/46",
        start_date: "2020-01-01",
        end_date: "2020-12-31",
        creation_date: "2020-01-01",
        issues: [
          {
            name: "fdfdssf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }, {
            name: "sssddfsf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          },
          {
            name: "asdffdasdfasdf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          },
          {
            name: "asdfasd",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Micro-Acquisition Pilot",
    description: "Milestones and issues for MAP",
    milestones: [
      {
        name: "Phase 1 - Approvals and planning.",
        description: "This milestone ends with approval from PPOC as part of the lite project process. Approval points in this process include (in this order): EA review and endorse, BRM review and endorse, Executive Sponsors review and endorse, PPOC approve. We are currently at EA review and endorse step (and have been since Dec. 4, 2020).",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/49",
        start_date: "2020-11-01",
        end_date: "2021-01-07",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 2 - design and build",
        description: "This milestone ends with the launch of the micro-acquisition website.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/52",
        start_date: "2021-01-08",
        end_date: "2021-05-19",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 3 - Approvals and planning.",
        description: "This milestone includes all research, planning and actual communications activities related to: finding ESDC clients, engaging with suppliers and sharing the work and lessons learned for this pilot.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/53",
        start_date: "2021-05-20",
        end_date: "2021-06-30",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 4 - Operations and close out",
        description: "This milestone includes all work that will be done while the pilot is in operation for 1 year (including mid-point assessment and CFOB monitoring) as well as the close out work following completion of the pilot.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/68",
        start_date: "2021-07-01",
        end_date: "2022-06-08",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Automate Software Approval",
    description: "Milestones and issues for ASA",
    milestones: [
      {
        name: "Study",
        description: "Study the current processes and options.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/18",
        start_date: "2021-04-01",
        end_date: "2021-07-01",
        creation_date: "2020-12-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Ongoing Advice",
    description: "Milestones and issues for Ongoing Advice",
    milestones: [
      {
        name: "Ongoing advice and unplanned work",
        description: "Work involving ongoing advice to senior management and other stakeholders regarding initiatives, debriefs, commenting on various materials that have been unplanned for.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/28",
        start_date: "2019-02-15",
        end_date: null,
        creation_date: "2019-02-15",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  }
];

console.log(initiatives);


var w = 800;
var h = 400;


var svg = d3.select("#svgContainer")
  //.selectAll("svg")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "svg");

let taskArray = initiatives.filter(initiative => {
  return !initiative.hasOwnProperty("milestones");
}).map(element => {
  let task = {};
  task = { task: element.title, type: element.milestone.title, startTime: element.created_at, endTime: element.milestone.due_on, details: element.description };
  return task;
})


var dateFormat = d3.timeFormat("%Y-%m-%d");

var timeScale = d3.scaleTime()
  .domain([d3.min(taskArray, function (d) { return dateFormat.parse(d.startTime); }),
  d3.max(taskArray, function (d) { return dateFormat.parse(d.endTime); })])
  .range([0, w - 150]);

var categories = new Array();

for (var i = 0; i < taskArray.length; i++) {
  categories.push(taskArray[i].type);
}

var catsUnfiltered = categories; //for vert labels

categories = checkUnique(categories);


makeGant(taskArray, w, h);

var title = svg.append("text")
  .text("Gantt Chart Process")
  .attr("x", w / 2)
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .attr("font-size", 18)
  .attr("fill", "#009FFC");



function makeGant(tasks, pageWidth, pageHeight) {

  var barHeight = 20;
  var gap = barHeight + 4;
  var topPadding = 75;
  var sidePadding = 75;

  var colorScale = d3.scale.linear()
    .domain([0, categories.length])
    .range(["#00B9FA", "#F95002"])
    .interpolate(d3.interpolateHcl);

  makeGrid(sidePadding, topPadding, pageWidth, pageHeight);
  drawRects(tasks, gap, topPadding, sidePadding, barHeight, colorScale, pageWidth, pageHeight);
  vertLabels(gap, topPadding, sidePadding, barHeight, colorScale);

}


function drawRects(theArray, theGap, theTopPad, theSidePad, theBarHeight, theColorScale, w, h) {

  var bigRects = svg.append("g")
    .selectAll("rect")
    .data(theArray)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function (d, i) {
      return i * theGap + theTopPad - 2;
    })
    .attr("width", function (d) {
      return w - theSidePad / 2;
    })
    .attr("height", theGap)
    .attr("stroke", "none")
    .attr("fill", function (d) {
      for (var i = 0; i < categories.length; i++) {
        if (d.type == categories[i]) {
          return d3.rgb(theColorScale(i));
        }
      }
    })
    .attr("opacity", 0.2);


  var rectangles = svg.append('g')
    .selectAll("rect")
    .data(theArray)
    .enter();


  var innerRects = rectangles.append("rect")
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("x", function (d) {
      return timeScale(dateFormat.parse(d.startTime)) + theSidePad;
    })
    .attr("y", function (d, i) {
      return i * theGap + theTopPad;
    })
    .attr("width", function (d) {
      return (timeScale(dateFormat.parse(d.endTime)) - timeScale(dateFormat.parse(d.startTime)));
    })
    .attr("height", theBarHeight)
    .attr("stroke", "none")
    .attr("fill", function (d) {
      for (var i = 0; i < categories.length; i++) {
        if (d.type == categories[i]) {
          return d3.rgb(theColorScale(i));
        }
      }
    })


  var rectText = rectangles.append("text")
    .text(function (d) {
      return d.task;
    })
    .attr("x", function (d) {
      return (timeScale(dateFormat.parse(d.endTime)) - timeScale(dateFormat.parse(d.startTime))) / 2 + timeScale(dateFormat.parse(d.startTime)) + theSidePad;
    })
    .attr("y", function (d, i) {
      return i * theGap + 14 + theTopPad;
    })
    .attr("font-size", 11)
    .attr("text-anchor", "middle")
    .attr("text-height", theBarHeight)
    .attr("fill", "#fff");


  rectText.on('mouseover', function (e) {
    // console.log(this.x.animVal.getItem(this));
    var tag = "";

    if (d3.select(this).data()[0].details != undefined) {
      tag = "Task: " + d3.select(this).data()[0].task + "<br/>" +
        "Type: " + d3.select(this).data()[0].type + "<br/>" +
        "Starts: " + d3.select(this).data()[0].startTime + "<br/>" +
        "Ends: " + d3.select(this).data()[0].endTime + "<br/>" +
        "Details: " + d3.select(this).data()[0].details;
    } else {
      tag = "Task: " + d3.select(this).data()[0].task + "<br/>" +
        "Type: " + d3.select(this).data()[0].type + "<br/>" +
        "Starts: " + d3.select(this).data()[0].startTime + "<br/>" +
        "Ends: " + d3.select(this).data()[0].endTime;
    }
    var output = document.getElementById("tag");

    var x = this.x.animVal.getItem(this) + "px";
    var y = this.y.animVal.getItem(this) + 25 + "px";

    output.innerHTML = tag;
    output.style.top = y;
    output.style.left = x;
    output.style.display = "block";
  }).on('mouseout', function () {
    var output = document.getElementById("tag");
    output.style.display = "none";
  });


  innerRects.on('mouseover', function (e) {
    //console.log(this);
    var tag = "";

    if (d3.select(this).data()[0].details != undefined) {
      tag = "Task: " + d3.select(this).data()[0].task + "<br/>" +
        "Type: " + d3.select(this).data()[0].type + "<br/>" +
        "Starts: " + d3.select(this).data()[0].startTime + "<br/>" +
        "Ends: " + d3.select(this).data()[0].endTime + "<br/>" +
        "Details: " + d3.select(this).data()[0].details;
    } else {
      tag = "Task: " + d3.select(this).data()[0].task + "<br/>" +
        "Type: " + d3.select(this).data()[0].type + "<br/>" +
        "Starts: " + d3.select(this).data()[0].startTime + "<br/>" +
        "Ends: " + d3.select(this).data()[0].endTime;
    }
    var output = document.getElementById("tag");

    var x = (this.x.animVal.value + this.width.animVal.value / 2) + "px";
    var y = this.y.animVal.value + 25 + "px";

    output.innerHTML = tag;
    output.style.top = y;
    output.style.left = x;
    output.style.display = "block";
  }).on('mouseout', function () {
    var output = document.getElementById("tag");
    output.style.display = "none";

  });



}


function makeGrid(theSidePad, theTopPad, w, h) {

  var xAxis = d3.svg.axis()
    .scale(timeScale)
    .orient('bottom')
    .ticks(d3.time.days, 1)
    .tickSize(-h + theTopPad + 20, 0, 0)
    .tickFormat(d3.time.format('%d %b'));

  var grid = svg.append('g')
    .attr('class', 'grid')
    .attr('transform', 'translate(' + theSidePad + ', ' + (h - 50) + ')')
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "middle")
    .attr("fill", "#000")
    .attr("stroke", "none")
    .attr("font-size", 10)
    .attr("dy", "1em");
}

function vertLabels(theGap, theTopPad, theSidePad, theBarHeight, theColorScale) {
  var numOccurances = new Array();
  var prevGap = 0;

  for (var i = 0; i < categories.length; i++) {
    numOccurances[i] = [categories[i], getCount(categories[i], catsUnfiltered)];
  }

  var axisText = svg.append("g") //without doing this, impossible to put grid lines behind text
    .selectAll("text")
    .data(numOccurances)
    .enter()
    .append("text")
    .text(function (d) {
      return d[0];
    })
    .attr("x", 10)
    .attr("y", function (d, i) {
      if (i > 0) {
        for (var j = 0; j < i; j++) {
          prevGap += numOccurances[i - 1][1];
          // console.log(prevGap);
          return d[1] * theGap / 2 + prevGap * theGap + theTopPad;
        }
      } else {
        return d[1] * theGap / 2 + theTopPad;
      }
    })
    .attr("font-size", 11)
    .attr("text-anchor", "start")
    .attr("text-height", 14)
    .attr("fill", function (d) {
      for (var i = 0; i < categories.length; i++) {
        if (d[0] == categories[i]) {
          //  console.log("true!");
          return d3.rgb(theColorScale(i)).darker();
        }
      }
    });

}

//from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
function checkUnique(arr) {
  var hash = {}, result = [];
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (!hash.hasOwnProperty(arr[i])) { //it works with objects! in FF, at least
      hash[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

//from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
function getCounts(arr) {
  var i = arr.length, // var to loop over
    obj = {}; // obj to store results
  while (i) obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
  return obj;
}

// get specific from everything
function getCount(word, arr) {
  return getCounts(arr)[word] || 0;
}