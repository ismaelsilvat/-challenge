"use client"
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ProfilePageContent from "@/features/profile/components/ProfilePageContent";

const ProfilePage: React.FC = () => {
  return (
    <Container className="px-4">
      <Navbar/>
      <ProfilePageContent />
      <Footer/>
    </Container>
  );
};

export default ProfilePage;
