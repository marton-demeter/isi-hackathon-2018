# USC/ISI Graduate Hackathon 2018

## User Interface

### Overview

Device and Configuration Management - This component will provide a user interface for viewing a list of devices that have been identified on the network, and to enable an admistrator to make policy decisions regarding the ability of the device to communicate with other devices on the network, and certain network ranges.

### Implementation Details
 
The front-end was implemented with the React javascript framework to handle the generation and display of devices and policies as components. All of the styling was done with SASS modules local to the components. Webpack 3 was used to compile and bundle the generated code. The front-end was connected to the backend via a websocket connection provided by the socket.io library. The backend was written in Node, and used Express to create an API- and web-server, as well as socket.io to create a websocket server.
<br>
### Data Flow

The user interface marks the final step in the data flow process. After the algorithm has determined the policies for all discovered devices on the server, it sends the information to the backend API-server in the form of a POST request. The following is an example of an object that represents a device found on the network:
<br>
```javascript
{
  "20:f8:5e:ca:91:52": {
    "org": "",
    "host": [
      "www.fitbit.com"
    ],
    "packets": [
      {
        "id": [ 295 ],
        "date": "2016/06/09",
        "time": "06:21:10",
        "source_ip": "10.10.10.123",
        "source_port": "59904",
        "dest_mac": "00:b5:6d:06:08:ba",
        "dest_ip": "10.10.10.1",
        "dest_port": "53",
        "protocol": "DNS",
        "good_packet": 1,
        "allowed": 1
      }, {
        "id": [ 296 ],
        "date": "2016/06/09",
        "time": "06:21:10",
        "source_ip": "10.10.10.123",
        "source_port": "",
        "dest_mac": "00:b5:6d:06:08:ba",
        "dest_ip": "104.16.65.50",
        "dest_port": "",
        "protocol": "HTTP",
        "good_packet": 1,
        "allowed": 1
      }
    ],
    "token": [ "YdVrYEOhu9iXcEZNAs8m" ],
    "serialNumber": [ "20F85ECA9152" ],
    "model": []
  }
}
```

Each object in the "packets" array acts as a rule for the device. In the interest of not repeating redundant information, the following fields are used to determine the uniqueness of a rule:
<br> 
```javascript
{
  "source_ip": String(),
  "source_port": String(),
  "dest_mac": String(),
  "dest_ip": String(),
  "dest_port": String(),
  "protocol": String()
}
```
If two packets include the same information in these fields, they will be represented under a single rule, and their id will be preserved in the "id" array.
<br><br>
After the POST request is received by the API-server, it forwards that information to every websocket client connected to the socket.io server.
As that information is received by the browser (client), it generates and displays the results accordingly.
<br>

### Visualization and Interaction

The results are grouped by device to allow the user to easily make policy configuration changes. 

<img src="./docs/device_list.png" width="50%" align="center">

By clicking on a device, the rules pertraining to that device become visible in a dropdown. 

<img src="./docs/rules_list.png" width="50%" align="center">

Each rule is shown with either a green or red background originally. Green means that the policy generation algorithm has allowed the packet to pass through, while red means that the policy generation algorithm has blocked the packet. Each rule then can further be modified manually to override the default generated policies.

### Responsive Design

The website works well in both dekstop and mobile web environments. 