// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
'use client'; // this is a client component 👈🏽
import { useState, useEffect } from 'react';

const MOCK_DATA = [
  { id: 1, title: 'Page 1' },
  { id: 2, title: 'Page 2' },
  { id: 3, title: 'Page 3' },
];

const PageList = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    // mock api call to and to show spinner for two seconds
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_DATA);
      }, 2000);
    });
    setPages(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loading-indicator"></div>
      ) : (
        <ul>
          {pages.map((page) => (
            <li key={page.id}>{page.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PageList;
