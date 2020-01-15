# mo-JavaScriptHelps
Some JavaScript I've used for various purposes in Mozenda

This repository contains numerous resources for Mozenda that are done through the JavaScript action.

### Finding the JSONs

One of the most effective methods of capturing web data is to identify if there are easier ways to capture it. While this isn't always possible, below I'm going to describe some methods I have used in order to find one of the easiest ways to capture data: GET/POST Requests.

One of the best places to find these are locator lists. For instance, look at this website below.

<img src="GETPOST Example/CosmoProfWebpage.png" alt="Cosmo Prof Webpage" />

This website shows a map with locations marked and a list of those marked locations to the left of the map. Now if you right click the page and select "Inspect", then "Network", then "XHR", you can see a list of calls that the page is making (pictured below). A lot of these are worthless things coming from ads or just parts of the page that aren't important. However, oftentimes with a webpage like this one there will be a call that shows all of the data (and sometimes more).

<img src="GETPOST Example/CosmoProfInspect.png" alt="Cosmo Prof Inspect" />

When you click on these you can look at the "Response" to determine if it contains the information you're looking for. Below, we can see that there's a Latitude and Longitude returned, and as you scroll over you can find the location title, address, website, etc.

<img src="GETPOST Example/CosmoProfCall.PNG" alt="Cosmo Prof Response" />

Next, you'll need to check the headers to determine if it is a GET or POST request. GET requests mostly allow the user to simply enter in a web URL that loads all of this information. However, POST requests often require additional headers to be added to run the request. This is a simple GET request. We'll talk about a POST request later.

<img src="GETPOST Example/CosmoProfHeaders.PNG" alt="Cosmo Prof Headers" />
