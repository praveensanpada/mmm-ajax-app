
let config = {
	address: "localhost",
	port: 8088,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			classes: 'scheduler',
			config: {
			}
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'scheduler',
			config: {
			}
		},
		{
			module: "clock",
			position: "top_right",
			classes: 'scheduler',
			config: {
			}
		},
		{
			module: "MMM-GooglePhotos",
			position: "fullscreen_above",
			config: {
				albums: ["AURIGA"],
				updateInterval: 1000 * 10,
				sort: "random",
				uploadAlbum: null,
				condition: {
					fromDate: null,
					toDate: null,
					minWidth: null,
					maxWidth: null,
					minHeight: null,
					maxHeight: null,
					minWHRatio: null,
					maxWHRatio: null,
				},
				showWidth: 1100,
				showHeight: 600,
				timeFormat: "YYYY/MM/DD HH:mm",
				debug: true,
			}
		},
		{
			module: 'MMM-NetworkConnection',
			position: 'top_right',
			classes: 'scheduler',
			showWidth: 200,
			showHeight: 100,
			config: {
			}
		},
		{
			module: "newsfeed",
			position: "bottom_left",
			classes: 'scheduler',
			config: {
				feeds: [
					{
						title: "Technology News",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Widget",
			config: {
				widgets: [
					{
						html: `
						<!DOCTYPE html>
						<html>
						<head>
							<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
							<script>
								$(document).ready(function () {
									$.ajax({
										url: 'https://www.aurigait.com/index.php/wp-json/wp/v2/posts',
										type: 'GET',
										dataType: 'json',
										success: function (data, textStatus, xhr) {
											$("#test2").html(data[0].title.rendered);
											$("#myText").html(data[0].content.rendered);
										},
										error: function (xhr, textStatus, errorThrown) {
											console.log('Error in Operation');
										}
									});
								});
							</script>
							<style>
								body {
									background-color: black;
								}
								.my-custom {
									font-size: 40px;
									color: white;
								}
							</style>
						</head>
						<body>
							<br />
							<br />
							<marquee attribute_name="attribute_value" ....more attributes id="myyy" style="font-size: 40px; color: aliceblue;">
								Blog From Wordpress Post API
							</marquee>
							<hr />
							<div class="my-custom">
									<h5 id="test2">
									</h5>
							</div>
							<div style="width: 80%; color: aliceblue; font-size: 30px;">
								<h5 id="myText">
								</h5>
							</div>
						</body>
						</html>
				  `,
						position: "top_right",
						width: "600px",
						height: "700px",
						backgroundColor: "#FFF"
					},
				]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
