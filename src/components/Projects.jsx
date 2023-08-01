import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Projects({ links, imageURLs }) {
  return (
    <Card className="mt-6 w-full flex justify-evenly">
      {imageURLs.map((imageUrl, index) => (
        <div key={index}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={imageUrl}
              alt={`card-image-${index}`}
              className="h-auto w-auto max-h-[400px] max-w-[400px]"
            />
          </CardHeader>
          <div>
            <h1 className="font-bold">Links</h1>
            <div className="flex justify-evenly">
              <ul key={index}>
                <li>
                  <a href={links[index].github}>Github Repository</a>
                </li>
                <li>
                  <a href={links[index].app}>Deployed Application</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
