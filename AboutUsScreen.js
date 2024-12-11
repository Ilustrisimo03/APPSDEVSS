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
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-",
    image: require("./assets/Image/Dinolan.png"),
  },
  {
    id: 3,
    name: "Laison, Sean Michael Angelo",
    assignPart: "SECURITY ASSURANCE .",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-Aliquam erat volutpat. Integer auctor tincidunt ante, eu sodales felis semper ac.",
    image: require("./assets/Image/Laison.png"),
  },
  {
    id: 4,
    name: "Tamsi, Denmark",
    assignPart: "BACK END.",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-Sed cursus lectus in tristique tempor. Nulla facilisi. Donec fringilla orci at urna vestibulum.",
    image: require("./assets/Image/tamsi.png"),
  },
  {
    id: 5,
    name: "LahayLahay, GLyza",
    assignPart: "USER INSIGHTS.",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-tiam eget eros arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: require("./assets/Image/lahaylahay.png"),
  },
  {
    id: 6,
    name: "Anagap, John Loyd",
    assignPart: "UI/UX HEAD DESIGNER",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-Mauris tincidunt risus sit amet dolor blandit, sed facilisis nunc ullamcorper.",
    image: require("./assets/Image/anagap.png"),
  },
  {
    id: 7,
    name: "Cabarrubias, Jaylene Kaye",
    assignPart: "USER INSIGHTS",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-Donec sollicitudin lobortis odio, in eleifend nisl pellentesque a. Phasellus euismod erat id tempus.",
    image: require("./assets/Image/kaye.png"),
  },
  {
    id: 8,
    name: "Del Pilar, Joselito",
    assignPart: "DB ADMINISTRATOR ",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.",
    image: require("./assets/Image/Delpilar.png"),
  },
  {
    id: 9,
    name: "Ilustrisimo, Emmanuel L.",
    assignPart: "UI/UX/FRONT END",
    paragraph:
      "A message is a communication or statement that is sent from one person or group to another. Messages can be sent verbally, in writing, or through a gesture or look. When sent electronically, a message is sent via a computer or device like a cell phone. The person who sends the message is called the sender, and the person who receives it is called the receiver.-Duis varius orci sit amet risus facilisis, in facilisis ante cursus.",
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
              A message is a communication or statement that is sent from one person or group to another. Messages can
              be sent verbally, in writing, or t
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
