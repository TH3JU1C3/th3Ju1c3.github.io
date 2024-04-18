const theoryLessons = [
	["Theory: Tutorial",
	"",
	"This is a program where you must identify ",
	"'green bugs'. These are elements in code that ",
	"unnecessarily increase carbon emissions of ",
	"software.",
	"",
	"Eliminating green bugs will help with the ",
	"environment, while also improving on code ",
	"quality."
	],
	["Theory: Power Usage Effectiveness",
	"",
	"Power Usage Effectiveness (PUE) is a measure",
	"of data center efficiency. It describes the energy",
	"overhead to run software. It is calculated by dividing",
	"the energy usage of computation by the",
	"total energy consumption of a data center.",
	"The best possible PUE is 1.",
	"",
	"Lowering PUE means less energy is wasted, ",
	"which will also increase operating profits."
	],
	["Theory: Energy proportionality",
	"",
	"Energy proportionality is the idea that computers",
	"become more energy efficient when they are running",
	"at higher usage levels. For example, a laptop may",
	"draw 100 watts of power at 0% CPU usage, 150W at 50%",
	"and 175W at 100% usage. Notice how this is not a linear",
	"process.",
	"",
	"You can take advantage of energy proportionality by waiting",
	"to process tasks in bulk and/or in parallel."
	],
	["Theory: Demand Shifting",
	"",
	"Carbon intensity is a measure of how clean or dirty ",
	"the electricity grid is. When electricity is ",
	"generated with fossil fuels, carbon intensity will ",
	"be high. Conversely, when electricity is mostly ",
	"generated with renewables, carbon intensity will be low.",
	"",
	"You can take advantage of this by shifting your computing",
	"demands to times/places with low carbon intensity. This is",
	"called 'Demand Shifting'"
	],
	["Theory: Support Older Hardware",
	"",
	"The manufacturing of hardware releases a lot of carbon. ",
	"This is known as 'embodied carbon'. By supporting older",
	"hardware, you encourage them to be used for longer. Thereby,",
	"lowering the demand for manufacturing new devices.",
	"",
	"- And allowing more users to access your services!"
	],
	["Theory: Lazy Loading",
	"",
	"Lazy loading is an attribute that can be set",
	"for HTML <img> and <iframe> tags. By setting",
	"loading='lazy' you ensure that browsers only",
	"download the files when they need to be rendered.",
	"",
	"This can drastically lower the amount of unnecessary",
	"data sent over the network - lowering energy use and",
	"speeding up the user's browsing experience."
	],
	["Theory: Validate HTML",
	"",
	"It is very easy to make typos when writing",
	"HTML code - often resulting in missing tags.",
	"Improper nesting and using out of date tags ",
	"are also examples of invalid HTML. This can ",
	"easily be fixed however by running your code",
	"through a HTML validator.",
	"",
	"Writing invalid HTML causes the browser to do",
	"extra work in interpreting the code. - As well",
	"as lowering the user's experience of the interface"
	]
]

const scenarioLessons = [
	["Scenario: You are developing code on an IDE.",
	"Your job is to identify the green bugs by clicking on them.",
	"When you have found all the bugs, click run to check",
	"your work. If you are unsure on what to click on,",
	"you can toggle hints.",
	],
	["Scenario: Amy is updating the code for the ",
	"microcontrollers that control the climate in her ",
	"data center. She heard about the benefits of ",
	"lowering her PUE and would like your help in lowering it"
	],
	["Scenario: John is writing code for a server farm.",
	"His servers recieve tasks to complete, he would",
	"like to take advantage of energy proportionality",
	"to increase his energy efficiency."
	],
	["Scenario: Sarah is looking to train her AI model",
	"and would like to use the carbon intensity API",
	"developed by the UK National Grid to delay the ",
	"start of her training epoch until carbon intensity",
	"is low."
	],
	["Scenario: George is developing a video streaming",
	"site. He has encoded his videos in the new AV1 format",
	"which boasts smaller filesizes. Unfortunately, many",
	"older devices don't have the hardware to support",
	"this compression standard, so George would also like ",
	"to use mp4 video as a fallback. Help him out."
	],
	["Scenario: Emma is making a website for her client's",
	"photography portfolio. She would like to use as",
	"little bandwidth as possible as her client can't pay",
	"expensive hosting costs. Help her out!"
	],
	["Scenario: Lucas is writing his blog. He has run",
	"his code through a HTML validator as he heard this will",
	"improve his SEO score, as well as lower his blog's carbon",
	"footprint. Point out to him the invalid HTML.",
	]
]

const codeLessons = [
	{ // Tutorial level
	"code":[
		"let list = [2,4,3,7,1];",
		"let sorted_list = inefficient_sort(list);",
		"let smallest_number = sorted_list[0];",
		],
	"codeSelect": [
		{"index":0, "line":0, "start":11, "end":22, "buggy":false},
		{"index":1, "line":1, "start":18, "end":34, "buggy":true},
		{"index":2, "line":1, "start":35, "end":39, "buggy":false},
		{"index":3, "line":2, "start":4, "end":19, "buggy":false},
		{"index":4, "line":2, "start":22, "end":33, "buggy":false},
		{"index":5, "line":2, "start":33, "end":36, "buggy":false}
		],
	"bugsPresent": 1
	},
	{ // PUE level
	"code":[ 
		"let temperature = getCurrentTemperature(); //Low or High",
		"let fan_speed = 'Low'; // Low, High, or Very High",
		"if (temperature == 'Low') { ",
		"    fan_speed = 'High';",
		"}",
		"else if (temperature == 'High') {",
		"    fan_speed = 'Very High';",
		"}",
		"fan.setSpeed(fan_speed);"
		],
	"codeSelect": [
		{"index":0, "line":0, "start":18, "end":41, "buggy":false},
		{"index":1, "line":1, "start":16, "end":21, "buggy":false},
		{"index":2, "line":2, "start":4, "end":24, "buggy":false},
		{"index":3, "line":3, "start":16, "end":22, "buggy":true},
		{"index":4, "line":5, "start":9, "end":30, "buggy":false},
		{"index":5, "line":6, "start":16, "end":27, "buggy":true},
		{"index":6, "line":8, "start":13, "end":22, "buggy":false}
		],
	"bugsPresent": 2
	},
	{ // Energy Proportionality level
	"code":[ 
		"let tasks = [];",
		"tasks.push(getTasks());",
		"if (tasks.length > 0) {",
		"    parallel (run=false) {",
		"        while (tasks.length > 0) {",
		"            let task = tasks.pop();",
		"            execute_task(task);",
		"        }",
		"    }",
		"}"
		],
	"codeSelect": [
		{"index":0, "line":1, "start":0, "end":10, "buggy":false},
		{"index":1, "line":1, "start":11, "end":21, "buggy":false},
		{"index":2, "line":2, "start":17, "end":20, "buggy":true},
		{"index":3, "line":3, "start":18, "end":23, "buggy":true},
		{"index":4, "line":4, "start":8, "end":13, "buggy":false},
		{"index":5, "line":4, "start":28, "end":31, "buggy":false},
		{"index":6, "line":5, "start":23, "end":34, "buggy":false},
		{"index":7, "line":6, "start":25, "end":29, "buggy":false},
		],
	"bugsPresent": 2
	},
	{ // Demand Shifting level
	"code":[ 
		"let data = GET api.carbonintensity.org.uk/intensity;",
		"let intensity = data['data'][0]['intensity']['index'];",
		"if (intensity == 'high' or intensity = 'very low') {",
		"    my_model.train();",
		"}"
		],
	"codeSelect": [
		{"index":0, "line":0, "start":11, "end":14, "buggy":false},
		{"index":1, "line":0, "start":15, "end":51, "buggy":false},
		{"index":2, "line":1, "start":16, "end":53, "buggy":false},
		{"index":3, "line":2, "start":17, "end":23, "buggy":true},
		{"index":4, "line":2, "start":39, "end":49, "buggy":false},
		{"index":5, "line":3, "start":4, "end":20, "buggy":false},
		],
	"bugsPresent": 1
	},
	{ // Support Older Hardware level
	"code":[ 
		"<video controls>",
		"    <source src='4K_video.av1' type='video/av1'>",
		"    <source src='SD_video.mp4' type='video/av1'>",
		"    Your browser does not support HTML5 video",
		"</video>",
		],
	"codeSelect": [
		{"index":0, "line":1, "start":16, "end":30, "buggy":false},
		{"index":1, "line":1, "start":36, "end":47, "buggy":false},
		{"index":2, "line":2, "start":16, "end":30, "buggy":false},
		{"index":3, "line":2, "start":36, "end":47, "buggy":true}
		],
	"bugsPresent": 1
	},
	{ // Lazy Loading level
	"code":[ 
		"<h1>My Portfolio</h1>",
		"<img src='img1.jpg' alt='My Photo' loading='eager'>",
		"<img src='img2.jpg' alt='Cool Photo'>",
		"<img src='img3.jpg' alt='Fun Photo' loading='lazy'>",
		"<p>Interested? Watch the video to see how to book!</p>",
		"<iframe src='booking_video.mp4' loading='eager'>",
		"</iframe>"
		],
	"codeSelect": [
		{"index":0, "line":1, "start":9, "end":19, "buggy":false},
		{"index":1, "line":1, "start":20, "end":34, "buggy":false},
		{"index":2, "line":1, "start":35, "end":42, "buggy":false},
		{"index":3, "line":1, "start":43, "end":50, "buggy":true},
		{"index":4, "line":2, "start":0, "end":37, "buggy":true},
		{"index":5, "line":3, "start":9, "end":19, "buggy":false},
		{"index":6, "line":3, "start":20, "end":35, "buggy":false},
		{"index":7, "line":3, "start":36, "end":50, "buggy":false},
		{"index":8, "line":5, "start":1, "end":7, "buggy":false},
		{"index":9, "line":5, "start":12, "end":31, "buggy":false},
		{"index":10, "line":5, "start":40, "end":47, "buggy":true}
		],
	"bugsPresent": 3
	},
	{ // Validate HTML level
	"code":[ 
		"<p>I'm practicing my HTML skills.",
		"<div>Apparently you can put div elements",
		"inside other block elements. Crazy!</div><?p>",
		"<p>It seems you need to also need to close ",
		"any tags! I found that out at <a href='./info.html'>",
		"this site<a> Anyway, nice to see you all!",
		"<center>",
		"    <footer><p>Lucas' Blog (c) 2024</p></footer>",
		"</center>"
		],
	"codeSelect": [
		{"index":0, "line":0, "start":0, "end":3, "buggy":false},
		{"index":1, "line":1, "start":0, "end":4, "buggy":false},
		{"index":2, "line":2, "start":35, "end":41, "buggy":false},
		{"index":3, "line":2, "start":41, "end":45, "buggy":true},
		{"index":4, "line":3, "start":0, "end":3, "buggy":false},
		{"index":5, "line":4, "start":30, "end":52, "buggy":false},
		{"index":6, "line":5, "start":9, "end":12, "buggy":true},
		{"index":7, "line":6, "start":0, "end":8, "buggy":true},
		{"index":8, "line":7, "start":4, "end":12, "buggy":false},
		{"index":9, "line":7, "start":12, "end":15, "buggy":false},
		{"index":10, "line":7, "start":35, "end":39, "buggy":false},
		{"index":11, "line":7, "start":39, "end":48, "buggy":false},
		{"index":12, "line":8, "start":0, "end":9, "buggy":true},
		],
	"bugsPresent": 4
	}
]

const end_text = [
	"Conglatuation on reaching the end of the green bugging ",
	"app. To summarise the main theory of writing green software:",
	"",
	"1) Try to make sure the hardware running your code is green",
	"For example, by selecting servers with low PUE, or in areas with",
	"renewable electricity.",
	"",
	"2) If possible, make your software work with the energy grid -",
	"taking advantage of times with low carbon intensity.",
	"",
	"3) Support older hardware by keeping your code lightweight,",
	"and not assuming your users have specific components in their hardware.",
	"",
	"4) Use only data that you need. Download information only when needed.",
	"",
	"Good luck with your future green coding journey"
];