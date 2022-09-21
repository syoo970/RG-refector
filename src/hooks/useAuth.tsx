import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
};

export default useAuth;
