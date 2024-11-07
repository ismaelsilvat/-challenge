import React from 'react';
import Navbar from "@/components/Navbar";
import ProfilePageContent from "@/features/profile/components/ProfilePageContent";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const Profile = () => {
  return (
    <Container className="px-4">
      <Navbar/>
      <ProfilePageContent />
      <Footer/>
    </Container>
  );
};

export default Profile;