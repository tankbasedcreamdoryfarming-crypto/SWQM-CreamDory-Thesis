// CONTENT FOR EACH PHASE WITH MULTIPLE IMAGES BELOW TEXT
const phaseData = {
    1: {
        title: "Phase 1",
        text: `
            We began our project by studying the challenges faced by local Cream Dory farmers, focusing on issues related to water quality and inconsistent monitoring practices. Our team researched the ideal water parameters necessary for Pangasius survival and growth, including pH, temperature, salinity, dissolved oxygen, ammonia, and water level. We also examined the current Philippine Pangasius industry, learning about the limited export presence and the need for improved production systems. This phase helped us identify the exact gaps our system needed to solve.
        `
    },
2: {
    title: "Phase 2",
    text: `
        After gathering sufficient data, we designed the full layout of the Smart Water Quality Management System. We selected the Arduino and ESP32 as our main microcontrollers and chose suitable sensors for each water quality parameter. The physical layout of the tank monitoring setup was planned alongside the Recirculating Aquaculture System (RAS) to ensure an efficient water flow system. This phase involved drafting diagrams, mapping connections, and establishing how all components would work together in real time.

        <!-- SENSORS -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Sensors</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="nH3.jpg" alt="nH3 Sensor">
                <figcaption>nH3 Sensor</figcaption>
            </figure>
            <figure>
                <img src="tds.jpg" alt="TDS Sensor">
                <figcaption>TDS Sensor</figcaption>
            </figure>
            <figure>
                <img src="do.jpg" alt="Dissolve Oxygen Sensor">
                <figcaption>Dissolve Oxygen Sensor</figcaption>
            </figure>
            <figure>
                <img src="ph.jpg" alt="pH Sensor">
                <figcaption>pH Sensor</figcaption>
            </figure>
			 <figure>
                <img src="float.jpg" alt="pH Sensor">
                <figcaption>Water Float</figcaption>
            </figure>
        </div>
		

        <!-- SYSTEM LAYOUT & DIAGRAMS -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">System Layout & Diagrams</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="about.png" alt="System Layout">
                <figcaption>System Layout</figcaption>
            </figure>
            <figure>
                <img src="schematic.jpg" alt="Schematic Diagram">
                <figcaption>Schematic Diagram</figcaption>
            </figure>
            <figure>
                <img src="pcb.png" alt="PCB Layout">
                <figcaption>PCB Layout</figcaption>
            </figure>
        </div>
		
		<!-- TANK SETUP -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Tank Setup</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="ts.jpg" alt="First Layer of RAS">
            </figure>
            <figure>
                <img src="ts1.jpg" alt="Second Layer of RAS">
            </figure>
            <figure>
                <img src="ts2.jpg" alt="Third Layer of RAS">
            </figure>
            <figure>
                <img src="ts3.jpg" alt="RAS Layout">
            </figure
			<figure>
                <img src="ts4.jpg" alt="RAS Layout">
            </figure>
			<figure>
                <img src="ts5.jpg" alt="RAS Layout">
            </figure>
        </div>

        <!-- RAS SETUP -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">RAS Setup</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="ras1.jpg" alt="First Layer of RAS">
                <figcaption>First Layer of RAS</figcaption>
            </figure>
            <figure>
                <img src="ras2.jpg" alt="Second Layer of RAS">
                <figcaption>Second Layer of RAS</figcaption>
            </figure>
            <figure>
                <img src="ras3.jpg" alt="Third Layer of RAS">
                <figcaption>Third Layer of RAS</figcaption>
            </figure>
            <figure>
                <img src="ras.jpg" alt="RAS Layout">
                <figcaption>RAS Layout</figcaption>
            </figure>
        </div>
		
		<!-- PUMPS AND WATER FLOW-->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Pumps and Water Flow</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="valve.jpg" alt="Solenoid Valve">
                <figcaption>Solenoid Valve</figcaption>
            </figure>
            <figure>
                <img src="ap.jpg" alt="Air Pump">
                <figcaption>Air Pump</figcaption>
            </figure>
            <figure>
                <img src="sp.jpg" alt="Submersible Pump">
                <figcaption>Submersible Pump</figcaption>
            </figure>
        </div>

        <!-- ACTUAL SETUP -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Actual Setup</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="as.jpg" alt="Actual Setup">
                <figcaption>Actual Setup</figcaption>
            </figure>
			<figure>
                <img src="as1.jpg" alt="Actual Setup">
                <figcaption>Actual Setup</figcaption>
            </figure>
			<figure>
                <img src="as2.jpg" alt="Actual Setup">
                <figcaption>Actual Setup</figcaption>
            </figure>
        </div>
		
		<!-- CONTROL AND COMMUNICATION-->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Control and Communication</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="esp32.jpg" alt="ESP32">
                <figcaption>ESP32</figcaption>
            </figure>
            <figure>
                <img src="relay.jpg" alt="RELAY">
                <figcaption>RELAY</figcaption>
            </figure>
            <figure>
                <img src="wifi.jpg" alt="WiFi">
                <figcaption>USB Modem WiFi</figcaption>
            </figure>
        </div>
    `
},

    3: {
        title: "Phase 3",
        text: `
            Once the design was finalized, we assembled the prototype by connecting all sensors to the microcontrollers and developing the initial program. This was where our system started to take shape. We programmed it to collect water data automatically and display it on an LCD screen. Each sensor was powered, tested, and adjusted to ensure functional reading outputs. Our prototype is now capable of continuously monitoring tank conditions with minimal human intervention.
			
			
		<!-- BUILDING THE SYSTEM -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">Building the System</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="pcb.jpg" alt="Building the System">
            </figure>
			<figure>
                <img src="bts1.jpg" alt="Building the System">
            </figure>
			<figure>
                <img src="bts2.jpg" alt="Building the System">
            </figure>
			    <figure>
                <img src="bts3.jpg" alt="Building the System">
            </figure>
			    <figure>
                <img src="bts4.jpg" alt="Building the System">
            </figure>
			    <figure>
                <img src="bts5.jpg" alt="Building the System">
            </figure>
        </div>

        <!-- CODING THE SYSTEM -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">Coding the System</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="code1.jpg" alt="Coding the System">
            </figure>
			<figure>
                <img src="code2.jpg" alt="Coding the System">
            </figure>
			<figure>
                <img src="code3.jpg" alt="Coding the System">
            </figure>
        </div>


        <!-- LCD DESIGN -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">LCD Display Design</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="lcd1.jpg" alt="LCD Display">
            </figure>
			<figure>
                <img src="lcd2.jpg" alt="LCD Display">
            </figure>
			<figure>
                <img src="lcd3.jpg" alt="LCD Display">
            </figure>
        </div>
		
        <!-- COMPLETE SYSTEM -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">Complete System</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="system.jpg" alt="Complete System">
            </figure>
        </div>
        `
    },
    4: {
        title: "Phase 4",
        text: `
            We are currently integrating our hardware system with a real-time web dashboard that displays live sensor readings and triggers alerts when parameters go beyond normal levels. The dashboard aims to give farmers instant access to their tank’s condition using any device. At the same time, the LCD display shows on-site data for easy visual checks. This phase also includes improving the user interface and ensuring system responsiveness.

            title: "Phase 4 – Dashboard and System Integration"
		
        <!-- BLYNK DASHBOARD -->
        <h3 style="text-align:center; font-weight:bold; margin-bottom:15px;">Blynk Dashboard Overview</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="ba1.jpg" alt="Blynk Dashboard">
            </figure>
			<figure>
                <img src="ba2.jpg" alt="Blynk Dashboard">
            </figure>           
			<figure>
                <img src="ba.jpg" alt="Blynk Dashboard">
            </figure>
        </div>

        <!-- LCD DISPLAY -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">LCD Display</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="lcd1.jpg" alt="LCD Display">
            </figure>
			<figure>
                <img src="lcd2.jpg" alt="LCD Display">
            </figure>
			<figure>
                <img src="lcd3.jpg" alt="LCD Display">
            </figure>
        </div>

        <!-- ALERT SYSTEM & NOTIFICATION SYSTEM -->
        <h3 style="text-align:center; font-weight:bold; margin-top:30px; margin-bottom:15px;">Alert and Notification System</h3>
        <div class="phase-images-grid">
           <figure>
                <img src="notif.jpg" alt="System Notification">
            </figure>
			<figure>
                <img src="notif1.jpg" alt="System Notification">
            </figure>
			<figure>
                <img src="alert.jpg" alt="Alert System">
            </figure>
        </div>

  
        `
    },
    5: {
        title: "Phase 5",
        text: `
            We started cultivating Cream Dory in early November to test how the system performs during real tank operation. Throughout the cultivation period, we observed the stability of the sensor readings and monitored the harvest weight of the fish to track growth progress under automated monitoring conditions. Instead of manual testing, system validation was done through continuous observation and interviews with local farmers, comparing their real-world experiences with the patterns detected by our monitoring system.

			<!-- VIDEO THUMB -->
			<h3 style="text-align:center; font-weight:bold; margin:20px 0;">System in Action & Fish Observation</h3>
			<div class="phase-video-grid-container" style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center;">

			<!-- Fish Swimming Video -->
				<div class="phase-video-grid" style="flex:1 1 300px; text-align:center;">
					<video class="video-thumb" 
						src="swim.mp4" 
						muted 
						playsinline 
						preload="metadata" 
						poster="video-thumb.jpg" 
						controls
						style="width:100%; border-radius:12px; border:2px solid #ccc;">
					</video>
				<p class="video-caption" style="margin-top:8px; font-weight:bold;">
					Live monitoring of Cream Dory swimming in the automated tank
				</p>
				</div>

			<!-- System Demonstration Video -->
				<div class="phase-video-grid" style="flex:1 1 300px; text-align:center;">
					<video class="video-thumb" 
						src="setup.mp4" 
						muted 
						playsinline 
						preload="metadata" 
						poster="video-thumb.jpg" 
						controls
						style="width:100%; border-radius:12px; border:2px solid #ccc;">
					</video>
				<p class="video-caption" style="margin-top:8px; font-weight:bold;">
					System Demonstration Video
				</p>
				</div>

			</div>




		<!-- TANK & SENSOR SETUP -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Tank & Sensor Setup</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="twf.jpg" alt="Tank with Fish and Sensors">
            </figure>
            <figure>
                <img src="twf1.jpg" alt="Tank with Fish and Sensors">
            </figure>
			<figure>
                <img src="twf1.jpg" alt="Tank with Fish and Sensors">
            </figure>
        </div>

        <!-- FISH WEIGHING / GROWTH MONITORING -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Fish Weighing / Growth Monitoring</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="wf.jpg" alt="Weighing of Fish">
            </figure>
            <figure>
                <img src="wf1.jpg" alt="Weighing of Fish">
            </figure>
			<figure>
                <img src="wf2.jpg" alt="Weighing of Fish">
            </figure>
			<figure>
                <img src="wf3.jpg" alt="Weighing of Fish">
            </figure>
			<figure>
                <img src="wf4.jpg" alt="Weighing of Fish">
            </figure>
			<figure>
                <img src="wf5.jpg" alt="Weighing of Fish">
            </figure>
        </div>

        <!-- DATA FROM BLYNK / DASHBOARD -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Data from Blynk / Dashboard</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="data1.jpg" alt="Blynk Dashboard Data">
            </figure>
            <figure>
                <img src="data2.jpg" alt="Blynk Dashboard Data">
            </figure>
			<figure>
                <img src="data3.jpg" alt="Blynk Dashboard Data">
            </figure>
        </div>

        <!-- OBSERVATIONS / INTERVIEWS -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Observations / Interviews</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="interview.jpg" alt="Interview with Local Farmers">
            </figure>
        </div>
    `
},
    6: {
        title: "Phase 6",
        text: `
            Our next step is to fully evaluate the system’s performance based on the collected real-time data and fish growth results. We will refine the accuracy of the readings, improve the alert system, and enhance the dashboard’s usability. These improvements aim to make the system more reliable, more user-friendly, and better suited for full-scale deployment in actual Cream Dory farms.

        <!-- AVERAGE OF EACH PARAMETERS -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Average of each Parameters</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="nh3.png" alt="Average nH3">
				 <figcaption>Average nH3</figcaption>
            </figure>
            <figure>
                <img src="ph.png" alt="Average pH">
				 <figcaption>Average pH</figcaption>
            </figure>
			<figure>
                <img src="temp.png" alt="Average Temperature">
				 <figcaption>Average Temperature</figcaption>
            </figure>
			<figure>
                <img src="tds.png" alt="Average TDS">
				 <figcaption>Average TDS</figcaption>
            </figure>
			<figure>
                <img src="do.png" alt="Average Dissolve Oxygen">
				 <figcaption>Average Dissolve Oxygen</figcaption>
            </figure>
			<figure>
                <img src="wl.png" alt="Average Water Level">
				 <figcaption>Average Water Level</figcaption>
            </figure>
        </div>
		
		<!-- AVERAGE WEIGHT OF THE FISH -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Average weight of the Fish</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="fw.png" alt="Average weight of the Fish">
            </figure>
        </div>

		<!-- NOTIFICATIONS AND ALERTS -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Notification and Alerts</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="notif.jpg" alt="System Notification">
            </figure>
			<figure>
                <img src="notif1.jpg" alt="System Notification">
            </figure>
			<figure>
                <img src="alert.jpg" alt="Alert System">
            </figure>
        </div>
		
		<!-- DASHBOARD REVIEW -->
        <h3 style="text-align:center; font-weight:bold; margin:20px 0;">Dashboard Review</h3>
        <div class="phase-images-grid">
            <figure>
                <img src="ba1.jpg" alt=" Blynk Application">
            </figure>
			<figure>
                <img src="ba2.jpg" alt="Blynk Application">
            </figure>
			<figure>
                <img src="ba.jpg" alt="Blynk Application">
            </figure>
        </div>
		
		<!-- USER MANUAL -->
		<h3>User Manual (PDF)</h3>
		<div style="text-align:center; margin-top: 15px;">
		<a href="user_manual.pdf" target="_blank" class="btn">Open User Manual</a>
		</div>


			
            </div>
        `
    }
};

// OPEN MODAL
function openModal(num) {
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    modalTitle.textContent = phaseData[num].title;
    modalText.innerHTML = phaseData[num].text;


    /* ⭐ STEP 1 — REMOVE ALL INLINE STYLES PARA PANTAY ANG SIZE ⭐ */
    const imgsToClean = modalText.querySelectorAll("img");
    imgsToClean.forEach(img => {
        img.removeAttribute("style");
    });


    /* ⭐ STEP 2 — FIX THE FIGURE STRUCTURE (SPLIT INTO SINGLE IMAGES) ⭐ */
    const rawFigures = modalText.querySelectorAll(".phase-images figure");

    rawFigures.forEach(figure => {
        const images = Array.from(figure.querySelectorAll("img"));
        const captions = Array.from(figure.querySelectorAll("figcaption"));

        const container = document.createElement("div");
        container.classList.add("phase-images-grid");

        images.forEach((img, i) => {
            const fig = document.createElement("figure");

            const newImg = img.cloneNode(true);
            const cap = captions[i] ? captions[i].cloneNode(true) : null;

            fig.appendChild(newImg);
            if (cap) fig.appendChild(cap);

            container.appendChild(fig);
        });

        figure.replaceWith(container);
    });


    /* ⭐ STEP 3 — APPLY UNIVERSAL IMAGE STYLING LIKE ZOOM ETC. ⭐ */
    const images = modalText.querySelectorAll('img');
    images.forEach(img => {
        img.style.cursor = "pointer";
        img.style.borderRadius = "10px";
        img.style.border = "3px solid #ccc";
        img.classList.add("zoomable");
    });



    /* ⭐ IMAGE ZOOM MODAL SETUP ⭐ */
    if (!document.getElementById("imgModal")) {
        const imgModalHTML = `
            <div id="imgModal" class="img-modal" style="display:none;position:fixed;z-index:9999;padding-top:60px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.8);">
                <span class="close" style="position:absolute;top:20px;right:35px;color:#fff;font-size:40px;font-weight:bold;cursor:pointer;">&times;</span>
                <img class="img-modal-content" id="imgModalContent" style="margin:auto;display:block;max-width:80%;max-height:80vh;border-radius:12px;box-shadow:0 0 15px rgba(255,255,255,0.8);">
                <div id="imgModalCaption" style="margin:auto;text-align:center;color:#ddd;padding:10px 0;font-weight:bold;"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', imgModalHTML);
    }

    const zoomableImages = modalText.querySelectorAll('img.zoomable');
    const imgModal = document.getElementById('imgModal');
    const imgModalContent = document.getElementById('imgModalContent');
    const imgModalCaption = document.getElementById('imgModalCaption');
    const closeBtn = imgModal.querySelector('.close');

    zoomableImages.forEach(img => {
        img.onclick = () => {
            imgModal.style.display = "block";
            imgModalContent.src = img.src;
            imgModalCaption.textContent = img.alt || "";
        };
    });

    closeBtn.onclick = () => imgModal.style.display = "none";
    imgModal.onclick = e => { if (e.target === imgModal) imgModal.style.display = "none"; };


    /* ⭐ SHOW MODAL ⭐ */
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.querySelector(".modal-content").style.background = "linear-gradient(135deg, #DDDAD0, #7A7A73)";
    setTimeout(() => modal.classList.add("show"), 10);
	
	/* ⭐ VIDEO ZOOM MODAL (PARANG IMAGE ZOOM) ⭐ */
if (!document.getElementById("videoModal")) {
    const videoModalHTML = `
        <div id="videoModal" class="img-modal">
            <span class="close">&times;</span>
            <video id="videoModalContent"
                   controls
                   style="margin:auto;display:block;max-width:80%;max-height:80vh;border-radius:12px;">
            </video>
            <div id="videoModalCaption"></div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", videoModalHTML);
}

const videoModal = document.getElementById("videoModal");
const videoModalContent = document.getElementById("videoModalContent");
const videoClose = videoModal.querySelector(".close");

const videoThumbs = modalText.querySelectorAll(".video-thumb");

videoThumbs.forEach(video => {
    video.onclick = () => {
        videoModal.style.display = "block";
        videoModalContent.src = video.src;
        videoModalContent.play();
    };
});

videoClose.onclick = () => {
    videoModalContent.pause();
    videoModalContent.currentTime = 0;
    videoModal.style.display = "none";
};

videoModal.onclick = e => {
    if (e.target === videoModal) {
        videoModalContent.pause();
        videoModalContent.currentTime = 0;
        videoModal.style.display = "none";
    }
};

}


// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("modal");
	 // ⭐ STOP VIDEO WHEN MODAL CLOSES ⭐
    const videos = modal.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
}
