import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import GhostWriting from "../screens/GhostWriting";
import FaithWriter from "../screens/FaithWiter";
import BookEditing from "../screens/BookEditing";
import BookPublishing from "../screens/BookPublishing";
import BookMarketing from "../screens/BookMarketing";
import BookCoverDesign from "../screens/BookCoverDesign";
import AudioBookDesign from "../screens/AudioBookDesign";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import FeaturedAuthor from "../screens/FeaturedAuthor";
import PressRelease from "../screens/PressRelease";
import BookTrailer from "../screens/BookTrailer";
import CustomBookIllustration from "../screens/CustomBookIllustration";
import ChildrenIllustration from "../screens/ChildrenIllustration";
import ChildrenBookPrinting from "../screens/ChildrenBookPrinting";
import AuthorWebsite from "../screens/AuthorWebsite";
import CommicIllustration from "../screens/CommicIllustration";

import BookFormatting from "../screens/BookFormatting";
import ProofReading from "../screens/ProofReading";
import SocialMediaMarketing from "../screens/SocialMediaMarketing";
import EBookSEO from "../screens/EBookSEO";
import AmazonPrinting from "../screens/AmazonPrinting";
import BookReview from "../screens/BookReview";
import PrPublication from "../screens/PrPublication";
import EbookWriting from "../screens/EbookWriting";
import ArticleWritingPublication from "../screens/ArticleWritingPublication";
import BookVideoTrailer from "../screens/BookVideoTrailer";
import CopyrightsProtection from "../screens/CopyrightsProtection";
import ThankYou from "../screens/ThankYou";



const Router = () => {
  return (
    <BrowserRouter basename="/bookwriting">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ghost-writing" element={<GhostWriting />} />
        <Route path="/faith-writer" element={<FaithWriter />} />
        <Route path="/book-editing" element={<BookEditing />} />
        <Route path="/book-publishing" element={<BookPublishing />} />
        <Route path="/book-marketing" element={<BookMarketing />} />
        <Route path="/book-cover-design" element={<BookCoverDesign />} />
        <Route path="/audio-book-design" element={<AudioBookDesign />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/featured-author" element={<FeaturedAuthor />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/book-trailer" element={<BookTrailer />} />
        <Route path="/custom-book-illustration" element={<CustomBookIllustration />} />
        <Route path="/ebook-writing" element={<EbookWriting />} />
        <Route path="/article-writing-publication" element={<ArticleWritingPublication />} />
        <Route path="/book-video-trailer" element={<BookVideoTrailer />} />
        <Route path="/copyrights-protection" element={<CopyrightsProtection />} />
        <Route
          path="/children-illustration"
          element={<ChildrenIllustration />}
        />
        <Route
          path="/children-book-printing"
          element={<ChildrenBookPrinting />}
        />
        <Route path="/author-website" element={<AuthorWebsite />} />
        <Route path="/commic-illustration" element={<CommicIllustration />} />

        {/* New Pages */}
        <Route path="/book-formatting" element={<BookFormatting />} />
        <Route path="/proof-reading" element={<ProofReading />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/eBook-seo" element={<EBookSEO />} />
        <Route path="/amazon-printing" element={<AmazonPrinting />} />
        <Route path="/book-review" element={<BookReview />} />
        <Route path="/pr-publication" element={<PrPublication />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
