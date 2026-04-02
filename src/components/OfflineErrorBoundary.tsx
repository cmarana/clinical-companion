import { Component, type ReactNode } from "react";
import { WifiOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  isOffline: boolean;
}

export default class OfflineErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, isOffline: !navigator.onLine };

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => this.setState({ isOffline: false });
  handleOffline = () => this.setState({ isOffline: true });

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center gap-4">
          <div className="rounded-full bg-destructive/10 p-4">
            <WifiOff className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            {this.state.isOffline ? "Sem conexão com a internet" : "Erro ao carregar"}
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            {this.state.isOffline
              ? "Verifique sua conexão e tente novamente. Conteúdo salvo offline continua disponível."
              : this.props.fallbackMessage || "Ocorreu um erro inesperado. Tente recarregar a página."}
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={this.handleRetry}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Tentar novamente
            </Button>
            {this.state.isOffline && (
              <Button size="sm" variant="default" onClick={() => window.location.href = "/offline"}>
                Ver conteúdo offline
              </Button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
