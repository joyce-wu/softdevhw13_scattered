// Joyce Wu & Queenie Xiang
// SoftDev2 pd7
// K13 -- Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country
// 2018-03-20

//Grabbing SVG element and its attributes
var svg = document.getElementById("vimage");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

//data parsed through csv file
//dictionary with {happiness score: GDP} format
var data = {5.18200016021729: 0.982409417629242, 6.00799989700317: 1.00082039833069, 6.60900020599365: 1.35268235206604, 5.23400020599365: 1.15360176563263, 7.50400018692017: 1.480633020401, 5.90199995040894: 1.31458234786987, 6.09800004959106: 1.32539355754852, 7.3769998550415: 1.50394463539124, 5.29300022125244: 1.22255623340607, 6.89099979400635: 1.46378076076508, 5.97100019454956: 0.786441087722778, 6.4539999961853: 0.872001945972443, 6.52699995040894: 1.34327983856201, 5.82200002670288: 1.13077676296234, 5.47200012207031: 1.55167484283447, 6.42399978637695: 1.12786877155304, 6.64799976348877: 1.62634336948395, 7.53700017929077: 1.61646318435669, 7.0789999961853: 1.10970628261566, 5.92000007629395: 1.41691517829895, 5.95599985122681: 0.907975316047668, 5.27299976348877: 1.08116579055786, 5.80999994277954: 1.3469113111496, 5.81899976730347: 1.28455626964569, 6.97700023651123: 1.53570663928986, 7.49399995803833: 1.56497955322266, 5.04099988937378: 0.524713635444641, 5.32399988174438: 1.2860119342804, 5.39499998092651: 1.06931757926941, 4.95499992370605: 1.02723586559296, 7.00600004196167: 1.48709726333618, 5.71500015258789: 1.03522527217865, 6.99300003051758: 1.54625928401947, 6.59899997711182: 1.18529546260834, 7.4689998626709: 1.44357192516327, 5.31099987030029: 0.925579309463501, 5.83799982070923: 0.728870630264282, 5.62900018692017: 1.18939554691315, 6.16800022125244: 1.36135590076447, 5.26200008392334: 0.995538592338562, 5.33599996566772: 0.991012394428253, 5.27899980545044: 0.951484382152557, 6.08400011062622: 1.29121541976929, 6.44199991226196: 1.43092346191406, 5.22700023651123: 1.28948748111725, 5.75799989700317: 1.3412059545517, 7.31599998474121: 1.47920441627502, 5.00400018692017: 0.596220076084137, 7.21299982070923: 1.37538242340088, 6.10500001907349: 1.63295245170593, 5.26900005340576: 0.72688353061676, 5.25: 1.12843120098114, 5.82299995422363: 0.833756566047668, 6.08699989318848: 1.48841226100922, 6.40299987792969: 1.38439786434174, 6.375: 1.87076568603516, 5.23699998855591: 1.12112903594971, 6.4520001411438: 1.23374843597412, 5.17500019073486: 1.06457793712616, 6.42199993133545: 1.43362653255463, 6.57800006866455: 1.15318381786346, 6.95100021362305: 1.48792338371277, 5.52500009536743: 1.10180306434631, 6.86299991607666: 1.74194359779358, 6.71400022506714: 1.44163393974304, 5.62099981307983: 1.35593807697296, 5.56899976730347: 1.15655755996704, 6.3439998626709: 1.53062355518341, 5.19500017166138: 1.3151752948761, 5.22499990463257: 1.07498753070831, 6.65199995040894: 1.25278460979462, 5.49300003051758: 0.932537317276001, 5.15100002288818: 0.0226431842893362, 7.31400012969971: 1.40570604801178, 6.57200002670288: 1.69227766990662, 6.00299978256226: 0.909784495830536, 5.82499980926514: 1.21768391132355, 5.96299982070923: 1.28177809715271, 7.28399991989136: 1.484414935112, 6.07100009918213: 0.737299203872681, 5.5: 1.19827437400818, 5.2350001335144: 0.878114581108093, 5.61100006103516: 1.32087934017181, 7.52199983596802: 1.48238301277161, 5.97300004959106: 1.29178786277771, 6.35699987411499: 1.07062232494354, 5.96400022506714: 1.39506661891937, 6.63500022888184: 1.10735321044922, 5.23000001907349: 1.07937383651733, 5.07399988174438: 0.783756256103516, 5.18100023269653: 0.730573117733002, 4.96199989318848: 0.479820191860199, 5.01100015640259: 0.885416388511658, 5.84999990463257: 1.26074862480164, 5.87200021743774: 1.09186446666718, 5.42999982833862: 0.85769921541214};


//Creating the x-axis 
var create_xAxis = function() {
    var x_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    x_axis.setAttribute("x1", width/2 - 400); 
    x_axis.setAttribute("x2", width/2 + 400);
    x_axis.setAttribute("y1", height/2);
    x_axis.setAttribute("y2", height/2);
    x_axis.setAttribute("stroke-width", 3);
    x_axis.setAttribute("stroke", "black");
    svg.appendChild(x_axis);
}

//Creating the y-axis
var create_yAxis = function() {
    var y_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    y_axis.setAttribute("x1", width/2 - 400); 
    y_axis.setAttribute("x2", width/2 - 400);
    y_axis.setAttribute("y1", height/2 - 500);
    y_axis.setAttribute("y2", height/2);
    y_axis.setAttribute("stroke-width", 3);
    y_axis.setAttribute("stroke", "black");
    svg.appendChild(y_axis);
};

//Plotting the data points
var plotData = function() {
    
    //Arrays that will contain the x and y coordinates
    var xCoordinates = [];
    var yCoordinates = [];

    //Length of the data -- used later for creating circles
    var length = Object.keys(data).length;

    //Adding to the arrays of coordinates
    for (var key in data) {
	yCoordinates.push(key);
	xCoordinates.push(data[key]);
    }

    //Checking the arrays
    for (i = 0; i < length; i++) {
	console.log("x"); 
	console.log(xCoordinates[i]);
	console.log("y"); 
	console.log(yCoordinates[i]);
    }
    
    //Creating the length number of circles
    for (i = 0; i < length; i++) {
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

	c.setAttribute("fill","lime");
	c.setAttribute("r",10);
	svg.appendChild(c);
    }

    //Setting the x and y coordinates of all circles
    //Note: multiplying d by a certain factor to make the points more spread out (they're all really small decimal numbers) 
    var circles = d3.selectAll("circle");
    circles.data(xCoordinates);
    circles.attr("cx",
		 function(d) {
		     return (width/2-400) + (d * 350) });
    
    circles.data(yCoordinates);
    circles.attr("cy",
		 function(d) {
		     return (height/2-1200) + (d * 150) });
}; 

//Creates the labels for each axis
var create_labels = function() {
    var xLabel = "GDP";
    var yLabel = "Happiness";

    //X-label
    var xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xLabel.setAttribute("x", width/2);
    xLabel.setAttribute("y", height/2+25);
    xLabel.setAttribute("fill", "black");
    xLabel.textContent = "G D P";

    //Y-label
    var yLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yLabel.setAttribute("x", width-(width-15));
    yLabel.setAttribute("y", height/2-250);
    yLabel.setAttribute("fill", "black");
    yLabel.textContent = "Happiness";

    svg.appendChild(xLabel);
    svg.appendChild(yLabel);

    //Number markers on the axes
    var zero = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    zero.setAttribute("x", 100);
    zero.setAttribute("y", height/2+15);
    zero.setAttribute("fill", "black");
    zero.textContent = "0";
   
    var two = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    two.setAttribute("x", width-110);
    two.setAttribute("y", height/2+15);
    two.setAttribute("fill", "black");
    two.textContent = "2";

    var eight = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    eight.setAttribute("x", 85);
    eight.setAttribute("y", height/2-485);
    eight.setAttribute("fill", "black");
    eight.textContent = "8";
    
    svg.appendChild(zero);
    svg.appendChild(two);
    svg.appendChild(eight);
};

//Calling the functions
create_xAxis(); 
create_yAxis();
plotData();
create_labels();
    
    
