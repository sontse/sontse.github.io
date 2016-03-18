
function h(c) { return Math.round(c.getHue()); }
function s(c) { return Math.round(c.getSaturation() * 100); }
function l(c) { return Math.round(c.getLightness()  * 100); }

function r(c) { return Math.round(c.getRed()   * 255); }
function g(c) { return Math.round(c.getGreen() * 255); }
function b(c) { return Math.round(c.getBlue()  * 255); }

function rr(c) { return c.getRed().toFixed(3); }
function gg(c) { return c.getGreen().toFixed(3); }
function bb(c) { return c.getBlue().toFixed(3); }




$(function() {

	$("input").change(onChange);
	//$("input").on("focusout", onChange);
	$("input").on("input", onChange);

	var h = Math.round(Math.random() * 360);
	$("#h").val(h);
	updateHSL();
});

function onChange(e) {
	//console.log(e, e.type, e.target.id, e.target.value);
	//if (e.type === "keyup" && e.keyCode )
	switch (e.target.id) {
		case "h":
		case "s":
		case "l":
			updateHSL();
			break;
			
		case "r":
		case "g":
		case "b":
			updateRGB();
			break;
			
		case "hex":
			updateHEX();
			break;
	}
}



function updateHEX() {
	var hex = $("#hex").val();
	if (hex.charAt(0) != "#") hex = "#" + hex;
	if (hex.length != 7) return;

	var color = net.brehaut.Color(hex);
	update(color);
}

function updateRGB() {
	var r = $("#r").val();
	var g = $("#g").val();
	var b = $("#b").val();
	var rgb = "rgb(" + r + "," + g + "," + b + ")";
	
	var color = net.brehaut.Color(rgb);
	update(color);
}

function updateHSL() {
	var h = $("#h").val();
	var s = $("#s").val();
	var l = $("#l").val();
	var hsl = "hsl(" + h + "," + s + "%," + l + "%)";
	
	var color = net.brehaut.Color(hsl);
	update(color);
}


function update(color) {
	$("#hex").val(color.toCSS());
	$("#h").val(h(color));
	$("#s").val(s(color));
	$("#l").val(l(color));
	$("#r").val(r(color));
	$("#g").val(g(color));
	$("#b").val(b(color));
	
	$("#bg").css("background-color", color.toCSS());
	generateOutput(color);
}


function generateOutput(color) {
	//console.log(color);
	var hsl = "hsl(" + h(color) + ", " + s(color) + "%, " + l(color) + "%)";
	var rgb = "rgb(" + r(color) + ", " + g(color) + ", " + b(color) + ")";
	var uicolor = "[UIColor colorWithRed:" + rr(color) + " green:" + gg(color) + " blue:" + bb(color) + " alpha:1.0]";

	var html = color.toCSS() + "<br />";
	html += rgb + "<br />";
	html += hsl + "<br />";
	html += "<br />";
	html += uicolor;
	$("#output").html(html);
}








