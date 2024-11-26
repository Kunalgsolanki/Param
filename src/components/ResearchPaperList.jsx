import { graphql, useStaticQuery } from 'gatsby';
import React, { useState, useEffect } from 'react';
import './ResearchPaperList.css'; // Import the CSS file for styling
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ResearchPaperList = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityReaserchPeper {
        nodes {
          title
          slug {
            current
          }
          author {
            name
          }
          mainImage {
            asset {
              url
            }
          }
          categories {
            _id
            title
          }
          publishedAt
          body {
            _key
            _type
            style
            listItem
            level
            _rawChildren
          }
          link
        }
      }
    }
  `);

  const [loading, setLoading] = useState(true);
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    // Simulate a loading delay for better UX (optional)
    const timeout = setTimeout(() => {
      setPapers(data?.allSanityReaserchPeper?.nodes || []);
      setLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-6">
        <Typography className="text-white">Loading research papers...</Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-20 py-6">
      <h1 className="text-white font-semibold mb-10">Research Papers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers?.length > 0 ? (
          papers.map((paper) => (
            <Card key={paper?.slug?.current} className="w-full min-h-20 sm:w-80 md:w-96 lg:w-[20rem]">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={paper?.mainImage?.asset?.url}
                  alt="card-image"
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {paper?.title}
                </Typography>
                <Typography color="blue-gray" className="mb-2">
                  {paper.body
                    ? paper.body
                        .flatMap((value) =>
                          value._rawChildren?.map((item) => item?.text) || []
                        )
                        .join(" ")
                    : "No description available."}
                </Typography>
                <Typography>
                  Explore this research paper authored by{" "}
                  <strong>{paper?.author?.name}</strong>, published on{" "}
                  {new Date(paper?.publishedAt).toLocaleDateString()}.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a
                  href={paper?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Read More</Button>
                </a>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Typography color="white">No research papers available at the moment.</Typography>
        )}
      </div>
    </div>
  );
};

export default ResearchPaperList;
