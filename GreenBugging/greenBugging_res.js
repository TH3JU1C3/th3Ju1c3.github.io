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
	"Energy proportionality (EP) is the idea that computers",
	"become more energy efficient when they are running",
	"at higher usage levels. For example, a laptop may",
	"draw 100 watts of power at 0% CPU usage, 150W at 50%",
	"and 175W at 100% usage. Notice how this is not a linear",
	"process.",
	"",
	"You can take advantage of EP by waiting",
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
		{"index":0, "line":0, "start":11, "end":22, "buggy":false, "feedback":"A list of integers is already an efficient data structure"},
		{"index":1, "line":1, "start":18, "end":34, "buggy":true, "feedback":"Running an inefficient algorithm will waste energy! Good work!"},
		{"index":2, "line":1, "start":35, "end":39, "buggy":false, "feedback":"Passing the list through a sort function will return a sorted list"},
		{"index":3, "line":2, "start":4, "end":19, "buggy":false, "feedback":"smallest_number is a good name for a variable"},
		{"index":4, "line":2, "start":22, "end":33, "buggy":false, "feedback":"The first element of a sorted list will be the smallest"},
		{"index":5, "line":2, "start":33, "end":36, "buggy":false, "feedback":"The first element of a sorted list will be the smallest"}
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
		{"index":0, "line":0, "start":18, "end":41, "buggy":false, "feedback":"Amy says getCurrentTemperature will accurately give the current temperature"},
		{"index":1, "line":1, "start":16, "end":21, "buggy":false, "feedback":"Amy thinks setting the fan speed to Low as a default is desired"},
		{"index":2, "line":2, "start":4, "end":24, "buggy":false, "feedback":"Amy thinks having a check to see if the temperature decreases would be needed"},
		{"index":3, "line":3, "start":16, "end":22, "buggy":true, "feedback":"Increasing the fan speed higher higher than necessary is wasteful! Good work!"},
		{"index":4, "line":5, "start":9, "end":30, "buggy":false, "feedback":"Amy thinks having a check to see if the temperature increases would be needed"},
		{"index":5, "line":6, "start":16, "end":27, "buggy":true, "feedback":null},
		{"index":6, "line":8, "start":13, "end":22, "buggy":false, "feedback":"Amy says setting the fan speed to the updated value is necessary"}
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
		{"index":0, "line":1, "start":0, "end":10, "buggy":false, "feedback":"John says caching the task lists on a local list will lower network usage"},
		{"index":1, "line":1, "start":11, "end":21, "buggy":false, "feedback":"John says getTasks will give all the tasks that need to be completed"},
		{"index":2, "line":2, "start":17, "end":20, "buggy":true, "feedback":"Waiting to have a couple tasks and batching them together is well thought!"},
		{"index":3, "line":3, "start":18, "end":23, "buggy":true, "feedback":"Executing the tasks in parallel will allow you to exploit EP! Good job!"},
		{"index":4, "line":4, "start":8, "end":13, "buggy":false, "feedback":"John says performing this in a loop is required by the system"},
		{"index":5, "line":4, "start":28, "end":31, "buggy":false, "feedback":"John says '> 0' this will complete all the jobs in the queue"},
		{"index":6, "line":5, "start":23, "end":34, "buggy":false, "feedback":"Popping the tasks will remove them from the queue"},
		{"index":7, "line":6, "start":25, "end":29, "buggy":false, "feedback":null},
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
		{"index":0, "line":0, "start":11, "end":14, "buggy":false, "feedback":"Sarah says GET is the correct syntax to access the api"},
		{"index":1, "line":0, "start":15, "end":51, "buggy":false, "feedback":"Sarah says this API link will give her the data she needs"},
		{"index":2, "line":1, "start":16, "end":53, "buggy":false, "feedback":"Sarah says this is how the data is structured by the API"},
		{"index":3, "line":2, "start":17, "end":23, "buggy":true, "feedback":"Training an AI model when carbon intensity is high is a bad idea. Well Spotted!"},
		{"index":4, "line":2, "start":39, "end":49, "buggy":false, "feedback":"Sarah thinks it would be desireable to train when carbon intensity is very low"},
		{"index":5, "line":3, "start":4, "end":20, "buggy":false, "feedback":"Sarah says this is the correct way to call the training procedure"},
		],
	"bugsPresent": 1
	},
	{ // Support Older Hardware level
	"code":[ 
		"<video controls>",
		"    <source src='SD_video.mp4' type='video/av1'>",
		"    <source src='4K_video.av1' type='video/av1'>",
		"    Your browser does not support HTML5 video",
		"</video>",
		],
	"codeSelect": [
		{"index":0, "line":1, "start":16, "end":30, "buggy":false, "feedback":"George thinks defaulting to standard video resolution wouldn't be a bad idea"},
		{"index":1, "line":1, "start":36, "end":47, "buggy":true, "feedback":"Decoding av1 video needs special hardware the user might not have. Good Spot!"},
		{"index":2, "line":2, "start":16, "end":30, "buggy":false, "feedback":"While 4K does use lots of data, this can be mitigated with av1 encoding"},
		{"index":3, "line":2, "start":36, "end":47, "buggy":false, "feedback":"While 4K does use lots of data, this can be mitigated with av1 encoding"},
		{"index":4, "line":3, "start":4, "end":45, "buggy":false, "feedback":"George says this would be displayed to older devices"}
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
		{"index":0, "line":1, "start":9, "end":19, "buggy":false, "feedback":"Emma says that image 1 is needed for her client's portfolio"},
		{"index":1, "line":1, "start":20, "end":34, "buggy":false, "feedback":"Emma says that an alt tag will improve her client's SEO"},
		{"index":2, "line":1, "start":35, "end":50, "buggy":true, "feedback":"Setting loading to eager means the file is downloaded before it's needed"},
		{"index":3, "line":2, "start":0, "end":37, "buggy":true, "feedback":"Not specifying the loading attribute will default it to eager - wasteful right?"},
		{"index":4, "line":3, "start":9, "end":19, "buggy":false, "feedback":"Emma says that image 2 is needed for her client's portfolio"},
		{"index":5, "line":3, "start":20, "end":35, "buggy":false, "feedback":"Emma says that an alt tag will improve her client's SEO"},
		{"index":6, "line":3, "start":36, "end":50, "buggy":false, "feedback":"Emma kindly reminds you that setting loading to lazy is useful"},
		{"index":7, "line":5, "start":1, "end":7, "buggy":false, "feedback":"Emma says that she prefers to use iframes to import videos"},
		{"index":8, "line":5, "start":12, "end":31, "buggy":false, "feedback":"Emma says a booking video is needed to help her client secure bookings"},
		{"index":9, "line":5, "start":32, "end":47, "buggy":true, "feedback":null}
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
		"this site<a> Anyway, nice to see you all!</p>",
		"<center>",
		"    <footer><p>Lucas' Blog (c) 2024</p></footer>",
		"</center>"
		],
	"codeSelect": [
		{"index":0, "line":0, "start":0, "end":3, "buggy":false, "feedback":"The <p> tag on line 1 has been opened correctly, but check the closing tag"},
		{"index":1, "line":1, "start":0, "end":4, "buggy":false, "feedback":"While it is wise to avoid too many <div> tags, they are still valid HTML"},
		{"index":2, "line":2, "start":35, "end":41, "buggy":false, "feedback":null},
		{"index":3, "line":2, "start":41, "end":45, "buggy":true, "feedback":"Nice! <?p> is not the correct way to close a tag!"},
		{"index":4, "line":3, "start":0, "end":3, "buggy":false, "feedback":"The <p> tag on line 4 is opened, and later properly closed on line 6"},
		{"index":5, "line":4, "start":30, "end":52, "buggy":false, "feedback":"The anchor tag has been opened correctly, but check its closing tag"},
		{"index":6, "line":5, "start":9, "end":12, "buggy":true, "feedback":"Excellent, the anchor tag wasn't closed correctly"},
		{"index":7, "line":5, "start":41, "end":45, "buggy":false, "feedback":"The </p> tag on line 6 properly closes the one on line 4"},
		{"index":8, "line":6, "start":0, "end":8, "buggy":true, "feedback":"Good Work! <center> is an outdated tag, you should use CSS instead"},
		{"index":9, "line":7, "start":4, "end":12, "buggy":false, "feedback":"<footer> is a valid HTML tag"},
		{"index":10, "line":7, "start":12, "end":15, "buggy":false, "feedback":"The <p> tag on line 8 is opened and closed properly"},
		{"index":11, "line":7, "start":35, "end":39, "buggy":false, "feedback":"The </p> tag on line 8 is opened and closed properly"},
		{"index":12, "line":7, "start":39, "end":48, "buggy":false, "feedback":"</footer> is a valid HTML tag"},
		{"index":13, "line":8, "start":0, "end":9, "buggy":true, "feedback":null},
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