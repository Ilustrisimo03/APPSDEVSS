import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Modal } from "react-native";

// Add image paths relative to the assets folder
const teamMembers = [
  {
    id: 1,
    name: "Geanga, John Irvin C.",
    assignPart: "PROJECT MANAGER/BACK-END/ RELEASE MANAGER",
    paragraph:
      "As the project manager, backend developer, and release manager for our team, I ensured that the group operated efficiently and stayed on track to meet deadlines. I delegated tasks effectively, monitored progress, and maintained clear communication among all members to ensure smooth collaboration. On the backend, I developed robust solutions and managed the database, ensuring the functionality and security of our application. As the release manager, I coordinated testing, deployment, and final delivery, ensuring a seamless and timely release of the project.",
    image: require("./assets/Image/Geanga.png"),
  },
  {
    id: 2,
    name: "Dinolan, Angerl O.",
    assignPart: "QUALITY ASSURANCE",
    paragraph:
      "It is my role to test and verify our app's security. To examine the app's functionality, appearance, and performance as well as to see if there are any issues with logging in. Finally, before the app is released, I have to make sure it functions properly.",
    image: require("./assets/Image/Dinolan.png"),
  },
  {
    id: 3,
    name: "Laison, Sean Michael Angelo",
    assignPart: "SECURITY ASSURANCE .",
    paragraph:
      "As a Security Specialist, my role is to ensure the project's security are aligned with the system best practices. I am responsible for identifying potential vulnerabilities, and conducting security assessments to safeguard sensitive data and assets. I help with the team for the secure system . My focus is on minimizing risks.",
    image: require("./assets/Image/Laison.png"),
  },
  {
    id: 4,
    name: "Tamsi, Denmark",
    assignPart: "BACK END.",
    paragraph:
      "As a back-end developer, I built and maintained server-side logic and databases, handled user authentication, ensured data security, and optimized performance. I worked closely with the front-end team for smooth integration and contributed to deployment and maintenance for seamless updates and bug fixes.",
    image: require("./assets/Image/tamsi.png"),
  },
  {
    id: 5,
    name: "LahayLahay, GLyza",
    assignPart: "USER INSIGHTS.",
    paragraph:
      "My role is to understand what users need from the app. I collect feedback and use data to help make the app easier to use and more useful for checking the weather. My goal is to ensure the app fits users' needs and improves their experience.",
    image: require("./assets/Image/lahaylahay.png"),
  },
  {
    id: 6,
    name: "Anagap, John Loyd",
    assignPart: "UI/UX HEAD DESIGNER",
    paragraph:
      "As the Head of UI/UX Design, I led the design of the app's layout, ensuring it met the project goals. I worked closely with my team to make sure the design was implemented correctly. I focused on creating an intuitive and visually appealing user experience, conducting testing and gathering feedback to improve the app. I also managed a team of designers, guiding them to deliver consistent and high-quality design solutions.",
    image: require("./assets/Image/anagap.png"),
  },
  {
    id: 7,
    name: "Cabarrubias, Jaylene Kaye",
    assignPart: "USER INSIGHTS",
    paragraph:
      "As part of user insights, we check if the design or user requirements are correct and suitable for the app we develop. We also assess whether a user will like it or if changes are needed before execution.",
    image: require("./assets/Image/kaye.png"),
  },
  {
    id: 8,
    name: "Del Pilar, Joselito",
    assignPart: "DB ADMINISTRATOR ",
    paragraph:
      "As a Database Administrator (DBA) specializing in Firebase, my primary role is to ensure the optimal performance and scalability of our database systems hosted on Firebase. I manage the backend infrastructure ensuring smooth real-time data synchronization and handling large-scale data efficiently.",
    image: require("./assets/Image/Delpilar.png"),
  },
  {
    id: 9,
    name: "Ilustrisimo, Emmanuel L.",
    assignPart: "UI/UX/FRONT END",
    paragraph:
      "As a front-end developer and UI/UX designer, I worked on both the app's functionality and its design. As a UI/UX designer, I focused on creating a user-friendly and visually appealing interface. I designed the app in Figma, making sure it was easy to use and met the project requirements. I collaborated with my team to ensure the design was implemented correctly and helped optimize the app's performance for a smooth user experience across different devices.",
    image: require("./assets/Image/Ilustrisimo.png"),
  },
];

const AboutUsScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null); // State to store the selected team member

  const handleMorePress = (member) => {
    setSelectedMember(member); // Update the selected member state
  };

  const handleCloseModal = () => {
    setSelectedMember(null); // Close the modal by clearing the selected member
  };

  return (
    <ImageBackground
      source={require("./assets/Image/bg_weather.png")} // Replace with your asset path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Meet Our Team</Text>
          <View style={styles.stationcontainer}>
            <Text style={styles.weatherstation}>Weather Station</Text>
            <Text style={styles.weatherdescription}>
            Our Smart Weather Station will help you stay ready. By providing you with real-time temperature, humidity, and air quality updates, the app ensures that you're prepared for any situation that may arise throughout the day.
            </Text>
          </View>
          <View style={styles.gridContainer}>
            {teamMembers.map((member) => (
              <View key={member.id} style={styles.card}>
                <Image source={member.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{member.name}</Text>
                <Text style={styles.cardDescription}>{member.assignPart}</Text>

                {/* More button */}
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={() => handleMorePress(member)} // Pass the whole member object to the handler
                >
                  <Text style={styles.moreButtonText}>More</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Modal to show selected team member details */}
          {selectedMember && (
            <Modal transparent={true} animationType="fade" visible={true} onRequestClose={handleCloseModal}>
              <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                  <Image source={selectedMember.image} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedMember.name}</Text>

                  {/* "Assigned Part" label at the top */}
                  <Text style={styles.modalAssignPart}>Assigned Part</Text>

                  {/* Value of the assigned part at the bottom */}
                  <Text style={styles.modalAssignValue}>{selectedMember.assignPart}</Text>
                  <Text style={styles.modalParagraph}>{selectedMember.paragraph}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  scrollViewContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingBottom: 50,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1.5,
  },
  stationcontainer: {
    height: 90,
    width: "100%",
    backgroundColor: "#fff", // Adds a background color to the box
    paddingVertical: 5, // Vertical padding inside the box
    paddingHorizontal: 10, // Horizontal padding inside the box
    borderRadius: 5, // Rounded corners for the box
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 20,
  },
  weatherstation: {
    fontSize: 20,
    color: "#296093",
    fontWeight: "bold",
  },
  weatherdescription: {
    fontSize: 12,
    color: "#296093",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: "48%",
    height: 270,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    position: "relative",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 10,
    color: "#777",
    textAlign: "center",
    marginBottom: 10,
  },
  moreButton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#296093",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    position: "absolute",
    bottom: 10,
  },
  moreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  modalAssignPart: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginTop: 20, // Add some space above to visually separate from other content
  },
  modalAssignValue: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20, // Space between value and close button
    marginTop: "auto", // Push the value to the bottom of the modal
  },
  modalParagraph: {
    fontSize: 14,
    color: "#777",
    textAlign: "justify",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#296093",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default AboutUsScreen;
