# ionic-apicalls

This app is built using Ionic and Angular. Please clone this repo or download the zip file.

To run this app: <br />
    <ol>
        <li>Open terminal and ```cd {folderName}```</li>
        <li>Run ```npm install```</li>
        <li>Now you can run ```ionic serve``` and app will load in the browser; however, this app is customize for iOS so in the browser some design aspects will be missing.</li>
        <li> To run this app on iOS simulator:
            <ul>
                <li>Please add iOS platform by running ```ionic cordova platform add ios``` (Capacitor is disabled for this app)</li>
                <li>Run ```ionic cordova emulate ios``` and app is running on iOS simulator, et voilà!!</li>
            </ul>
        </li>
        <li>Landing page/first screen is Login, please use ```user1``` as a username and ```user11``` as a password. You can also find static list of users in ```src > app > services > sign-in.service.ts``` file.</li>
    </ol>
