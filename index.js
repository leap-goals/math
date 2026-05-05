<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>潜在ポテンシャル統一理論 - 数式リファレンス</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        :root {
            --primary-color: #2563eb;
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-color: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #0f172a;
                --card-bg: #1e293b;
                --text-color: #f1f5f9;
                --text-muted: #94a3b8;
                --border-color: #334155;
            }
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
        }

        header {
            background-color: var(--card-bg);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 1.25rem;
            margin: 0;
            text-align: center;
            font-weight: 700;
        }

        /* Table of Contents */
        .toc-container {
            padding: 1rem;
            background: var(--card-bg);
            margin: 1rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
        }

        .toc-title {
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .toc-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .toc-list li {
            margin-bottom: 0.5rem;
        }

        .toc-list a {
            color: var(--primary-color);
            text-decoration: none;
            font-size: 1rem;
            display: block;
            padding: 0.25rem 0;
        }

        /* Content Sections */
        .container {
            padding: 0 1rem 4rem 1rem;
        }

        section {
            margin-top: 2.5rem;
        }

        h2 {
            font-size: 1.1rem;
            border-left: 4px solid var(--primary-color);
            padding-left: 0.75rem;
            margin-bottom: 1.5rem;
            color: var(--text-color);
        }

        .formula-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 1rem;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .formula-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-muted);
            margin-bottom: 0.75rem;
            display: block;
        }

        .formula-content {
            overflow-x: auto;
            padding: 0.5rem 0;
            font-size: 1.1rem;
        }

        footer {
            text-align: center;
            padding: 2rem;
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Scroll margin for TOC links */
        section {
            scroll-margin-top: 5rem;
        }
    </style>
</head>
<body>

<header>
    <h1>数式リファレンス</h1>
</header>

<div class="container">
    <div class="toc-container">
        <div class="toc-title">目次</div>
        <ul class="toc-list">
            <li><a href="#sec1">1. 認知ダイナミクスの基礎理論</a></li>
            <li><a href="#sec2">2. 多主体および社会的拡張</a></li>
            <li><a href="#sec3">3. 物理系との構造的対応</a></li>
            <li><a href="#sec4">4. 認知戦および情報生成</a></li>
            <li><a href="#sec5">5. 付録：統一Lyapunov枠組み</a></li>
        </ul>
    </div>

    <section id="sec1">
        <h2>1. 認知ダイナミクスの基礎理論</h2>
        <div class="formula-card">
            <span class="formula-title">2.1 認知世界の定義</span>
            <div class="formula-content">\[W = W_{\text{current\&future}}\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.2 可能世界の順序づけ</span>
            <div class="formula-content">\[r : W \to W\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.3 TCZの可能世界論的定義</span>
            <div class="formula-content">\[\{ w \mid \forall y \exists x r_{\text{TCZ}}(x, y) \}, x, y \in W_{\text{current\&future}}\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.4 Self / Ego 演算子</span>
            <div class="formula-content">\[\{ w \mid \forall y \exists x s_{\text{Self}}(x, y) \}, s : \text{TCZ} \to \text{TCZ}\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.5 Egoの最適制御モデル</span>
            <div class="formula-content">\[\pi_c(x) = \arg \min_{u(t)} \int_0^T V(x(t), t) dt\]</div>
        </div>
    </section>

    <section id="sec2">
        <h2>2. 多主体および社会的拡張</h2>
        <div class="formula-card">
            <span class="formula-title">2.11.2 多主体への拡張（制御方策）</span>
            <div class="formula-content">\[\pi_i = \arg \min_{u_i(t)} \int_0^T ( V_i(x_i(t), t) + \sum_j \gamma_{ij} S_{ij}(x_i, x_j) ) dt\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.13.3 Shared-TCZの形式的定義（低次）</span>
            <div class="formula-content">\[\text{TCZ}_{\text{low}}^{\text{shared}} = \bigcap_{i=1}^N \text{TCZ}_i\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">2.13.4 定理3：制御方策</span>
            <div class="formula-content">\[\pi_i = \arg \min_{u_i(t)} \int_0^T ( V_i(x_i(t), t) + \sum_j \gamma_{ij} S_{ij}(x_i, x_j) + \eta_i A(x_i(t)) ) dt\]</div>
        </div>
    </section>

    <section id="sec3">
        <h2>3. 物理系との構造的対応</h2>
        <div class="formula-card">
            <span class="formula-title">7. 統一累積原理</span>
            <div class="formula-content">\[\int U(r) \rho dV \leftrightarrow \int_0^T V(x(t), t) dt\]</div>
        </div>
    </section>

    <section id="sec4">
        <h2>4. 認知戦および情報生成</h2>
        <div class="formula-card">
            <span class="formula-title">A.2 境界レベルの最小介入制御</span>
            <div class="formula-content">\[u^*_{\text{cw}}(t) = \arg \min_{u(t)} \int_0^T ( |V(x(t), t) - \theta|^2 + \lambda C(u(t)) ) dt\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">A.3 メッセージ受容モデル</span>
            <div class="formula-content">\[A(m \mid x_t) = \exp( - d( \phi(m), \text{TCZ}(x_t) )^2 / \sigma^2 )\]</div>
        </div>
    </section>

    <section id="sec5">
        <h2>5. 付録：統一Lyapunov枠組み</h2>
        <div class="formula-card">
            <span class="formula-title">B. 統一Lyapunov設定（収束条件）</span>
            <div class="formula-content">\[\nabla \Phi(z) \cdot F(z) \le -\alpha(\Phi(z) - \theta)\]</div>
        </div>
        <div class="formula-card">
            <span class="formula-title">C. 定理2：複合Lyapunov関数</span>
            <div class="formula-content">\[\mathcal{L}(x) = \sum_i V_i(x_i) + \sum_{i,j} \gamma_{ij} S_{ij}(x_i, x_j)\]</div>
        </div>
    </section>
</div>

<footer>
    &copy; 2026 Potential Unity Theory Reference
</footer>

</body>
</html>
