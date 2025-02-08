import { useEffect, useState } from "react";

interface ResultProps {
  id: number;
  name: string;
}

export function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResults] = useState<ResultProps[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState<{ [key: string]: ResultProps[] }>({});

  const fetchData = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    if (cache[searchQuery]) {
      setSearchResults(cache[searchQuery]);
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.recipes || []);
      setCache((prev) => ({ ...prev, [searchQuery]: data.recipes || [] }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div>
      <p className="title">Search Bar</p>
      <input
        type="text"
        className="input-box"
        placeholder="Search recipe"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
      />

      {showResults && searchQuery && (
        <div className="search-results-container">
          {searchResult.length === 0 ? (
            <div>No results found</div>
          ) : (
            <div className="search-results">
              {searchResult.map((item) => (
                <span key={item.id} className="result">
                  {item.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
