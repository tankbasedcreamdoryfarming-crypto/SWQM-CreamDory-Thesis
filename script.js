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

            <div class="phase-images">
            <figure>
				<img src="about.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>System Layout</figcaption>
                <img src="schematic.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Schematic Diagram</figcaption>
                <img src="pcb.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>PCB Layout</figcaption>
				<img src="nh3s.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>nH3 Sensor</figcaption>
				<img src="tdss.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>TDS Sensor</figcaption>
				<img src="dos.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Dissolve Oxygen Sensor</figcaption>
				<img src="phs.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>pH Sensor</figcaption>
				<img src="wiring.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Wiring / Connection Map</figcaption>
				<img src="as.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Actual Setup</figcaption>
				<img src="ras.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>RAS Layout</figcaption>
				<img src="blynk.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Blynk Dashboard</figcaption>
            </figure>
            </div>
        `
    },
    3: {
        title: "Phase 3",
        text: `
            Once the design was finalized, we assembled the prototype by connecting all sensors to the microcontrollers and developing the initial program. This was where our system started to take shape. We programmed it to collect water data automatically and display it on an LCD screen. Each sensor was powered, tested, and adjusted to ensure functional reading outputs. Our prototype is now capable of continuously monitoring tank conditions with minimal human intervention.

            <div class="phase-images">
            <figure>
                <img src="bts.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Building the System</figcaption>
                <img src="coding.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Coding the System</figcaption>    
                <img src="system.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Complete System</figcaption>
				<img src="lcd.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>LCD design of the System</figcaption>
            </figure>
            </div>
        `
    },
    4: {
        title: "Phase 4",
        text: `
            We are currently integrating our hardware system with a real-time web dashboard that displays live sensor readings and triggers alerts when parameters go beyond normal levels. The dashboard aims to give farmers instant access to their tank’s condition using any device. At the same time, the LCD display shows on-site data for easy visual checks. This phase also includes improving the user interface and ensuring system responsiveness.

            <div class="phase-images">
            <figure>
                <img src="blynk.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Blynk Application System</figcaption>
				<img src="alert.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Alert System</figcaption>
				<img src="notif.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Notification System</figcaption>
				<img src="lcd.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>LCD Display</figcaption>
            </figure>
            </div>
        `
    },
    5: {
        title: "Phase 5",
        text: `
            We started cultivating Cream Dory in early November to test how the system performs during real tank operation. Throughout the cultivation period, we observed the stability of the sensor readings and monitored the harvest weight of the fish to track growth progress under automated monitoring conditions. Instead of manual testing, system validation was done through continuous observation and interviews with local farmers, comparing their real-world experiences with the patterns detected by our monitoring system.

            <div class="phase-images">
			<figure>
               <img src="twf.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Tank with Fish and Sensors</figcaption>
				<img src="twf1.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Tank with Fish and Sensors</figcaption>
				<img src="wf.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Weighing of Fish</figcaption>
				<img src="wf1.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Weighing of Fish</figcaption>
				<img src="interview.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Interview</figcaption>
				</figure>
            </div>
        `
    },
    6: {
        title: "Phase 6",
        text: `
            Our next step is to fully evaluate the system’s performance based on the collected real-time data and fish growth results. We will refine the accuracy of the readings, improve the alert system, and enhance the dashboard’s usability. These improvements aim to make the system more reliable, more user-friendly, and better suited for full-scale deployment in actual Cream Dory farms.

            <div class="phase-images">
             <figure>
                <img src="nh3.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of nH3</figcaption>
                <img src="ph.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of pH Level</figcaption>
				<img src="temp.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of Temperature</figcaption>
				<img src="tds.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of TDS</figcaption>
				<img src="do.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of Dissolve Oxygen</figcaption>
				<img src="wl.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of Water Level</figcaption>
				<img src="fw.png" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Average of Fish Weight</figcaption>
				<img src="notif.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Notification</figcaption>
				<img src="ba.jpg" style="border-radius:12px; margin-bottom:10px;">
                <figcaption>Blynk Application</figcaption>
            </figure>
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
}


// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
}
