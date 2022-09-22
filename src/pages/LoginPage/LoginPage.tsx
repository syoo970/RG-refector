import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useOAuthQuery from "@/hooks/react-query/useOAuthQuery";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useOAuthQuery(searchParams.get("code") || "");

  useEffect(() => {
    if (!searchParams.get("code")) navigate("/", { replace: true });
  }, [searchParams, navigate]);

  return null;
};

export default LoginPage;
