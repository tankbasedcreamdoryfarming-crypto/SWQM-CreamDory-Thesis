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
                <img src="schematic.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>Schematic Diagram of the System</figcaption>
                <img src="pcb.png" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>PCB setup for the System</figcaption>
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
                <img src="bts.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>Building the System</figcaption>
				<img src="code.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>Coding the System</figcaption>	
				<img src="system.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>Complete System</figcaption>
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
                <img src="blynk.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>Blynk Application System</figcaption>
                <img src="lcd.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
					<figcaption>LED design of the System</figcaption>
			</figure>
            </div>
        `
    },
    5: {
        title: "Phase 5",
        text: `
            We started cultivating Cream Dory in early November to test how the system performs during real tank operation. Throughout the cultivation period, we observed the stability of the sensor readings and monitored the harvest weight of the fish to track growth progress under automated monitoring conditions. Instead of manual testing, system validation was done through continuous observation and interviews with local farmers, comparing their real-world experiences with the patterns detected by our monitoring system.

            <div class="phase-images">
                <img src="images/phase5-1.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
            </div>
        `
    },
    6: {
        title: "Phase 6",
        text: `
            Our next step is to fully evaluate the system’s performance based on the collected real-time data and fish growth results. We will refine the accuracy of the readings, improve the alert system, and enhance the dashboard’s usability. These improvements aim to make the system more reliable, more user-friendly, and better suited for full-scale deployment in actual Cream Dory farms.

            <div class="phase-images">
                <img src="images/phase6-1.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
                <img src="images/phase6-2.jpg" style="width:100%; border-radius:12px; margin-bottom:10px;">
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

    const modal = document.getElementById("modal");
    modal.style.display = "block";
    setTimeout(() => modal.classList.add("show"), 10);
}

// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
}
