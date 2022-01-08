# alasannya
There are various reasons for client-side scripting, but it can pretty much all be stated as “browsers and client machines are faster and bigger and more powerful than they used to be. Use that capability - only do things on the server that require server-side resources to do, or that cannot be done more quickly and easily on the client”. 

## Kapan harus pakai client-side?
Jika terdapat task yang bisa diselesaikan dari sisi client secara quickly dan easily, maka lakukan lah!

## Kapan harus pakai server side?
1. The task required long-time process and resources
2. need server resources (DB and Filesystem)


## This has a number of benefits:

1. It allows the server to serve more clients with the same system resources, since some of the stuff it used to do (laying out the HTML for each page after a request, for example) is now being done on the client

2. Other than sending the original resources (images, CSS, HTML, JS files) to get the page up and running, the only thing that needs to be sent later is the data that changes as the user uses the site/application. This cuts down on network traffic, which again allows more clients to be served.

3. Many things that clients do don’t actually require a round-trip to the server. For example, showing a drop-down menu can be done with client-side scripting easily, assuming you have some idea of what menu items need to be displayed and how they are organized (which itself is really data - it doesn’t have to be hard-coded as HTML). Given this menu data, there’s no real need to ask the server to do anything at all. Another example is client-side verification of user input (e.g., when entering an email address, the client script can verify that the format of the address is valid. It can then leave it to the server to verify that the actual address itself exists, if necessary).

4. It’s *much* faster to do interactive things only on the client, instead of requiring a round-trip to the server (animations, button-press visual changes), timed events, etc.