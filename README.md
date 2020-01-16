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

Next, you'll need to check the headers to determine if it is a GET or POST request. GET requests mostly allow the user to simply enter in a web URL that loads all of this information. However, POST requests often require additional headers to be added to run the request. This is a simple GET request. We'll talk about POST requests later.

<img src="GETPOST Example/CosmoProfHeaders.png" alt="Cosmo Prof Headers" />

Let's dig deeper into the specific request. On the image you can see this next to "Request URL":

```
https://maps.cosmoprofbeauty.com/api/getAsyncLocations?template=search&level=search&search=90210
```

This is the URL you will be loading into. Notice the "search=90210" input at the end of the URL.

Copy this URL and open it in a new webpage. It should open a page full of text. This is actually a JSON storing much of the data being shown about the various locations including the Latitude/Longitude, address, city, state, zip, name of the location, and the URL for that location. However, it's incredibly hard to read and understand when it's just in a huge block of text. Luckily, the code in this repository manipulates the data to be returned in easy to follow tables, along with taking care of the Unicode on the page.

<img src="GETPOST Example/CosmoProfJSONTable.png" alt="Cosmo Prof Headers" />

After doing all of this in Mozenda using either the JSON-Full-LoadPage.js to load the page or just opening the URL with a load page action and running the JSON-Full_OnPage.js, you should be able to easily capture the data that you're looking for.

## POST Request

POST Requests require that you add two components: sending the POST data and setting Request Headers. The POST data is the data required in order for the "Request" to complete with the right information/search. For this search, we are going to look at clarksusa.com.

<img src="GETPOST Example/ClarksPostRequest.png" alt="Clarks Post Request" />

When you identify the correct request, you can see that the Request Method is identified as a POST request. If you scroll down in the Headers window, there are two important components: Form Data & Request Headers. Let's first look at the Form Data.

<img src="GETPOST Example/ClarksFormData.png" alt="Clarks Form Data" />

This information is also known as the "Post Data". If you click "view source", that is the information you will copy into the "xhttp.send()" request. You can just copy and paste it between quotation marks between the parentheses. From here, you can try the call without any request headers. However, if the call doesn't work than you may have to set some request headers.

<img src="GETPOST Example/ClarksRequestHeaders.png" alt="Clarks Request Headers" />

To identify what is required in order to run this POST Request, it simply requires trial and error: testing which of the headers need to be set in order to get it to work. Luckily, we do know some of the most important headers to try first. First off, we're going to try "content-type". To set the header, we use the setRequestHeader() command, and then list the name and value. In this case, the name of the Header is "content-type" and the values is "application/x-www-form-urlencoded; charset=UTF-8".

```
xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
```

For this website, this is all that was needed in order to run this request. However, if this one doesn't work, you can set "referer", "accept-encoding", etc.

## Watch Out!

Mozenda allows you to store cookies which can work. However, if you expect to be able to copy the cookie into a request header like we've done here, this rarely works as the cookie is usually unique for every operation.
